import { render, screen, configure } from '@testing-library/react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem.jsx>', () =>
{
    const title = 'Titulo del GIF';
    const url = 'https://media1.giphy.com/media/3o7btLwJW1QqQqQqZS/200w.gif';
    test('should match with the snapshot', () =>
    {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('should show the image and the alt', () =>
    {
        render(<GifGridItem title={title} url={url} />);
        /*expect(screen.getByRole('img').src).toBe(url);*/
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should show the title', () =>
    {
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
});