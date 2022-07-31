import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) =>
{
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <p>Loading...</p>
            }
            {
                !isLoading &&
                <div className="card-grid ">
                    {images.map(image => <GifGridItem key={image.id} {...image} />)}
                </div>
            }
        </>
    )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
