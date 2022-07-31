import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('useFetchGifs', () =>
{
    test('sould return initial state', () =>
    {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('sould return images array and isLoading as false', async () =>
    {
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});