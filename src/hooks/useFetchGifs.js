import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (category) =>
{
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () =>
    {
        const images = await getGifs(category);
        setImages(images);
        setTimeout(() =>
        {
            setIsLoading(false);
        }, 1000);

    }
    useEffect(() =>
    {
        getImages();
    }, []);
    return {
        images,
        isLoading
    }
}
