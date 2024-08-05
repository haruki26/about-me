import { FC, useCallback, useRef, useState } from "react";
import useBodyScrollLock from "../../../hooks/useBodyScrollLock";
import Carousel from "./Carousel";

type Props = {
    images: JSX.Element[];
};

const GridPhotos: FC<Props> = ({ images }) => {
    const [isClickImage, setIsClickImage] = useState<number>(0);
    const [isActive, setIsActive] = useState(false);
    const target = useRef<HTMLDivElement>(null);

    const handleOpenModal = (index: number) => {
        setIsClickImage(index);
        setIsActive(true);
    };

    const handleCloseModal = () => {
        setIsActive(false);
    };

    useBodyScrollLock({
        isActive,
        target
    });

    return (
        <>
        <div ref={target} className={`h-screen w-screen fixed top-0 left-0 ${isActive ? "animate-fade-in-fwd z-50" : "animate-fade-out-bck -z-10"}`}>
            <Carousel images={images} clickImage={isClickImage} closeAction={handleCloseModal} />
        </div>
        <div className="grid grid-cols-2 gap-2">
            {images.map((image, index) => (
                <label key={index} className="aspect-square object-cover" onClick={() => handleOpenModal(index)}>
                    {image}
                </label>
            ))}
        </div>
        </>
    );
};

export default GridPhotos;