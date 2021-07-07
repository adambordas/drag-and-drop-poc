import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import Main from './Main';
import { MockedProvider } from '@apollo/client/testing';
import { GET_CARDS } from './lib/queries';

const cardsData = [{
  id: 'test id 1',
  description: 'test description 1',
  lane: 'todo',
}, {
  id: 'test id 2',
  description: 'test description 2',
  lane: 'in-progress',
}, {
  id: 'test id 3',
  description: 'test description 3',
  lane: 'done',
}];

describe('Main component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders properly', async () => {
    const mocks = [
      {
        request: {
          query: GET_CARDS,
        },
        result: {
          data: {
            cards: cardsData
          },
        },
      },
    ];

    const { container, getByText, queryAllByText } = render(
      <MockedProvider mocks={mocks}>
        <Main />
      </MockedProvider>
    );
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    const todoTitle = getByText('todo');
    const inProgressTitle = getByText('in-progress');
    const doneTitle = getByText('done');
    const cards = queryAllByText(/^test description/);

    expect(todoTitle).toBeInTheDocument();
    expect(inProgressTitle).toBeInTheDocument();
    expect(doneTitle).toBeInTheDocument();
    expect(cards).toHaveLength(cardsData.length);
    expect(container).toMatchSnapshot();
  });
});
