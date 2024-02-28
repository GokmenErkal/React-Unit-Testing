import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './';

describe('Counter Tests', () => {
    let increaseBtn, decreaseBtn, count;

    beforeEach(() => {
        render(<Counter />);
        count = screen.getByText('0');
        increaseBtn = screen.getByText('Arttır');
        decreaseBtn = screen.getByText('Azalt');
    });

    test('increase btn', async () => {
        userEvent.click(increaseBtn);
        await waitFor(() => expect(count).toHaveTextContent('1'));
    });

    test('decrease btn', async () => {
        userEvent.click(decreaseBtn);
        await waitFor(() => expect(count).toHaveTextContent('-1'));
    });
});
