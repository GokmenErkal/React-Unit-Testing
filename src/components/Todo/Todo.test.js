import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from '.';

describe('Todo testleri', () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);
        button = screen.getByText('Ekle');
        input = screen.getByLabelText('Text');
    });

    test('input ve button dökümanda bulunmalı', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test('inputa string ifade girildiğinde butona basıldığında listeye eklenmelidir.', () => {
        const name = 'Mehmet';

        userEvent.type(input, name);
        userEvent.click(button);

        expect(screen.getByText(name)).toBeInTheDocument();
    })
})


