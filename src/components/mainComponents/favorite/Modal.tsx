import { FC, useEffect, useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import SlideShow from "./SlideShow";
import Carousel from "./Carousel";

type Props = {
    images: string[];
    clickImage: number;
    closeModalAct: () => void;
}

const Modal: FC<Props> = ({
    images,
    clickImage,
    closeModalAct
}) => {
    const [isModalType, setIsModalType] = useState<boolean>(true);
    const [width] = useWindowSize();

    useEffect(() => {
        if (width < 768) {
            setIsModalType(true);
        } else {
            setIsModalType(false);
        }
    }, [width]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-slate-700/70 z-50">
            <div className="w-full h-full">
                <div className="w-full h-1/6 p-3">
                    <button
                    onClick={closeModalAct}
                    className="h-full w-1/5 rounded-xl bg-slate-400/70">
                        <span className="text-2xl text-gray-700 font-zenKurenaido font-extrabold underline md:text-3xl lg:text-5xl">Close</span>
                    </button>
                </div>
                {isModalType ? (
                    <Carousel images={images} clickImage={clickImage} />
                ) : ( 
                    <SlideShow images={images} clickImage={clickImage} />
                )}
            </div>
        </div>
    )
}

export default Modal;