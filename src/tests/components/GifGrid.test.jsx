import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Test in GifGrid component', () =>
{
    const category = 'Saitama';

    test('should show loading at begining', () =>
    {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    })
    test('should show images when images are loaded', () =>
    {
        const images = [
            { id: '1', url: 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif', title: 'Saitama' },
            { id: '2', url: 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif', title: 'Saitama2' },
            { id: '3', url: 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif', title: 'Saitama3' },
            { id: '4', url: 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif', title: 'Saitama4' },
            { id: '5', url: 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif', title: 'Saitama5' },
            { id: '6', url: 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif', title: 'Saitama6' },
            { id: '7', url: 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif', title: 'Saitama7' },
            { id: '8', url: 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif', title: 'Saitama8' },
            { id: '9', url: 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif', title: 'Saitama9' },
            { id: '10', url: 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif', title: 'Saitama10' },
        ];
        useFetchGifs.mockReturnValue({
            images: images,
            isLoading: false,
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(10);
    })
})