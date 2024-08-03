import { FC } from "react";

type Props = {
    images: JSX.Element[];
}

const Carousel: FC<Props> = ({images}) => {
    return (
        <div className="max-w-sm px-5">
            <div className="carousel carousel-center rounded-box w-full space-x-4">
                {images.map((image, index) => (
                    <div id={`item${index}`} key={index} className="carousel-item w-full h-96" >
                        {image}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;