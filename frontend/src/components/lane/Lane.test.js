import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import Lane from './Lane';
import { MockedProvider } from '@apollo/client/testing';

const mockMutation = jest.fn();
jest.mock('@apollo/client', () => ({
  useMutation: () => {
    return [mockMutation];
  },
  gql: (str) => {
    return str;
  }
}));

const cardsData = [{
  id: 'test id 1',
  description: 'test description 1',
  lane: 'test lane',
}, {
  id: 'test id 2',
  description: 'test description 2',
  lane: 'test lane',
}, {
  id: 'test id 3',
  description: 'test description 3',
  lane: 'test lane',
}];

const mockPreventDefault = jest.fn();

describe('Lane component', () => {
  beforeEach(() => {
    mockPreventDefault.mockClear();
    mockMutation.mockClear();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders properly', () => {
    const name = 'test name';

    const { container, getByText, queryAllByText } = render(
      <MockedProvider>
        <Lane name={name} cards={cardsData} />
      </MockedProvider>
    );

    const title = getByText(name);
    const cards = queryAllByText(/^test description/);

    expect(title).toBeInTheDocument();
    expect(cards).toHaveLength(cardsData.length);
    expect(container).toMatchSnapshot();
  });

  it('allows drop event by calling preventing default behaviour', () => {
    const { container } = render(
      <MockedProvider>
        <Lane cards={cardsData} />
      </MockedProvider>
    );

    const lane = container.querySelector('.lane');

    const isPrevented = fireEvent.dragOver(lane);

    expect(isPrevented).toEqual(false);
  });

  it('calls card mutation on drop event with proper parameters', async () => {
    const id = 'test card id';
    const name = 'test lane name';
    const dataTransfer = {
      getData: () => id
    };

    const { container } = render(
      <Lane name={name} cards={cardsData} />
    );

    const lane = container.querySelector('.lane');

    fireEvent.drop(lane, { dataTransfer });

    const expectedParameters = {
      variables: {
        id,
        lane: name
      }
    };

    await waitFor(() => expect(mockMutation).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(mockMutation).toHaveBeenCalledWith(expectedParameters));
  });
});
