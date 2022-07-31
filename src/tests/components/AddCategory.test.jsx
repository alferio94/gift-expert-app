import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';
describe('AddCategory', () =>
{
    test('input value should change', () =>
    {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe('Saitama');
    });
    test('should call onNewCategory when submit', () =>
    {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })
    test('should not call onNewCategory when submit and input is empty', () =>
    {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    })
})