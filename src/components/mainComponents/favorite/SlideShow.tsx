import { FC, useState } from "react";

type Props = {
    images: string[];
    clickImage: number;
}

const SlideShow: FC<Props> = ({images, clickImage}) => {
    const [visivleImage, setVisibleImage] = useState<number>(clickImage);
    
    const handleArrowBtn = (nextImgNum: number) => {
        if (nextImgNum < 0) {
            setVisibleImage(images.length - 1);
        } else if (nextImgNum >= images.length) {
            setVisibleImage(0);
        } else {
            setVisibleImage(nextImgNum);
        }
    }
    
    return (
        <div className="w-full h-3/4 flex flex-col gap-10 rounded-box">
            <div className="w-3/4 max-w-3xl h-3/4 mx-auto flex justify-between">
                <button
                onClick={() => handleArrowBtn(visivleImage - 1)}
                className="h-full bg-gray-600 px-3 rounded-l-xl">
                    <span className="text-3xl text-slate-400 lg:5xl">{"<"}</span>
                </button>
                <div className="w-5/6 h-full flex justify-center items-center">
                    <img src={images[visivleImage]} alt="carousel" className="m-1 h-full object-cover" />
                </div>
                <button
                onClick={() => handleArrowBtn(visivleImage + 1)}
                className="h-full bg-gray-600 px-3 rounded-r-xl">
                    <span className="text-3xl text-slate-400 lg:5xl">{">"}</span>
                </button>
            </div>
            <div className="w-full flex">
                <ul className="flex gap-5 m-auto">
                    {images.map((_, index) => (
                        <li
                        key={`carousel-${index}`}
                        className={`w-10 h-10 rounded-full ${visivleImage === index ? "bg-gray-400" : "bg-gray-600"} hover:bg-gray-500`}>
                            <button
                            onClick={() => setVisibleImage(index)}
                            className="w-full h-full">
                                <span className={`text-2xl ${visivleImage === index ? "text-slate-900" : "text-slate-300"}`}>
                                    {`${index + 1}`}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SlideShow;