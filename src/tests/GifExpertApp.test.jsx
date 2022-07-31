import { render, screen, fireEvent } from '@testing-library/react'
import { GifExpertApp } from '../GifExpertApp';

describe('GiftExpertApp', () =>
{
    test('renders correctly', () =>
    {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });
})