import { createRef, FC, RefObject, useEffect, useRef, useState } from "react";
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
    images: JSX.Element[];
    firstView: number
    closeAction: () => void;
};

const Carousel: FC<Props> = ({images, firstView, closeAction}) => {
    const [currentImage, setCurrentImage] = useState<number>(firstView);
    const scrollRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<RefObject<HTMLDivElement>[]>([]);

    images.forEach((_, index) => {
        imageRefs.current[index] = createRef<HTMLDivElement>();
    });

    useEffect(() => {
        setCurrentImage(firstView);
    }, [firstView]);

    useEffect(() => {
        if (currentImage < 0) {
            setCurrentImage(0);
        } else if (currentImage > images.length - 1) {
            setCurrentImage(images.length - 1);
        } else {
            imageRefs.current[currentImage].current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            });
        }
    }, [currentImage]);

    return (
        <div className="h-full w-full bg-slate-700/70 p-5">
            <div className="fixed">
                <label role="button" onClick={closeAction}>
                    <IoIosCloseCircleOutline size={"3rem"} />
                </label>
            </div>
            <div className="w-full h-full mx-auto flex flex-col justify-center gap-10">
                <div className="w-full h-1/2 flex justify-center gap-3 md:h-2/3">
                    <label
                    role="button"
                    onClick={() => setCurrentImage(currentImage - 1)}
                    className="h-full rounded-l-xl bg-slate-500/30 flex items-center" >
                        <HiOutlineArrowCircleLeft size={"2rem"} />
                    </label>
                    <div
                    ref={scrollRef}
                    className="w-3/4 max-w-screen-md h-full flex gap-5 overflow-x-scroll snap-mandatory snap-x">
                        {images.map((image, index) => (
                            <div key={index} ref={imageRefs.current[index]} className="min-w-full h-full snap-center">
                                {image}
                            </div>
                        ))}
                    </div>
                    <label
                    role="button"
                    onClick={() => setCurrentImage(currentImage + 1)}
                    className="h-full rounded-r-xl bg-slate-500/30 flex items-center" >
                        <HiOutlineArrowCircleRight size={"2rem"} />
                    </label>
                </div>
                <div className="join gap-1 mx-auto">
                    {images.map((_, index) => (
                        <label key={index} className="join-item">
                            <button
                            className={`btn btn-md text-3xl ${(currentImage === index) && "bg-slate-600"}`}
                            onClick={() => setCurrentImage(index)}>
                                {index + 1}
                            </button>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;