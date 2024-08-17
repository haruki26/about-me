import { FC, useEffect, useRef, useState } from "react";

type Props = {
    images: string[];
    clickImage: number;
}

const Carousel: FC<Props> = ({images, clickImage}) => {
    const clickImageRef = useRef<HTMLDivElement>(null);
    const [visivleImage, setVisibleImage] = useState<number>(clickImage);

    useEffect(() => {
        clickImageRef.current?.scrollIntoView({
            behavior: "instant",
            block: "center",
            inline: "center"
        });
    })

    const handleArrowBtn = (index: number) => {
        if (index < 0) {
            setVisibleImage(images.length - 1);
        } else if (index >= images.length) {
            setVisibleImage(0);
        } else {
            setVisibleImage(index);
        }
    }

    return (
        <div className="w-full h-full">
            <div className="w-5/6 h-4/5 mx-auto flex gap-10 overflow-x-scroll hidden-scrollbar snap-x md:hidden">
                {images.map((image, index) => (
                    <div
                    ref={(clickImage === index) ? clickImageRef : null}
                    key={`photo-${index}`}
                    className="min-w-full h-full snap-center">
                        <img src={image} alt="photo" className="w-full h-full object-cover rounded-lg" />
                    </div> 
                ))}
            </div>
            <div className="rounded-box w-full hidden md:inline">
                <div className="flex justify-between">
                    <button onClick={() => handleArrowBtn(visivleImage - 1)} className="bg-gray-200 p-2 rounded-full">{"<"}</button>
                    <img src={images[visivleImage]} alt="carousel" className="w-full" />
                    <button onClick={() => handleArrowBtn(visivleImage + 1)} className="bg-gray-200 p-2 rounded-full">{">"}</button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;