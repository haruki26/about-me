import { FC, useEffect, useRef } from "react";

type Props = {
    images: string[];
    clickImage: number;
}

const Carousel: FC<Props> = ({images, clickImage}) => {
    const clickImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        clickImageRef.current?.scrollIntoView({
            behavior: "instant",
            block: "center",
            inline: "center"
        });
    })

    return (
        <div className="w-full h-full">
            <div className="w-5/6 h-4/5 mx-auto flex gap-10 overflow-x-scroll hidden-scrollbar snap-x md:hidden">
                {images.map((image, index) => (
                    <div
                    ref={(clickImage === index) ? clickImageRef : null}
                    key={`photo-${index}`}
                    className="min-w-full h-4/5 my-auto snap-center">
                        <img src={image} alt="photo" className="w-full h-full object-cover rounded-lg" />
                    </div> 
                ))}
            </div>
        </div>
    );
};

export default Carousel;