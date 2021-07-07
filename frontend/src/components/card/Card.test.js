import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders properly', () => {
    const id = 'test id';
    const description = 'test description';

    const { container, getByText } = render(
      <Card id={id} description={description} />
    );

    const card = getByText(description);

    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('draggable');
    expect(container).toMatchSnapshot();
  });

  it('sets card id to dataTransfer object on dragStart event', () => {
    const mockSetData = jest.fn();
    const dataTransfer = {
      setData: mockSetData
    };

    const id = 'test id';
    const description = 'test description';

    const { getByText } = render(
      <Card id={id} description={description} />
    );

    const card = getByText(description);

    fireEvent.dragStart(card, { dataTransfer });

    expect(mockSetData).toHaveBeenCalledTimes(1);
    expect(mockSetData).toHaveBeenCalledWith('cardId', id);
  });
});
