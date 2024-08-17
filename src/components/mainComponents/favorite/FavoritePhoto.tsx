import { createRef, FC, RefObject, useMemo, useRef, useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";

import kaigan from "../../../assets/images/kaigan.jpg";
import dazaihu from "../../../assets/images/dazaihu.jpg";
import kibune from "../../../assets/images/kibune.jpg";
import kibune2 from "../../../assets/images/kibune2.jpg";
import kosumosu from "../../../assets/images/kosumosu.jpg";
import higanbana from "../../../assets/images/higanbana.jpg";
import Carousel from "./Carousel";


const FavoritePhoto: FC = () => {
    const images = [
        kaigan, dazaihu, kibune, kibune2, kosumosu, higanbana
    ];

    const [isVisivleModal, setIsVisibleModal] = useState<boolean>(false);
    const [clickImage, setClickImage] = useState<number>(0);

    const openModal = (index: number) => {
        setClickImage(index);
        setIsVisibleModal(true);
    };


    return (
        <div className="w-full flex flex-col items-center gap-3">
            <div className="flex gap-2">
                <MdOutlineCameraAlt className="my-auto" size={"2rem"} />
                <h2 className="font-kosugiMaru text-2xl md:text-3xl">Photo</h2>
            </div>
            <div className="w-full max-w-screen-sm px-3 grid grid-cols-2 grid-flow-row gap-2 md:max-w-screen-md md:grid-cols-3">
                {images.map((image, index) => (
                    <div key={`photo-${index}`} className="w-full" onClick={() => openModal(index)}>
                        <img src={image} alt="photo" className="aspect-square object-cover rounded-lg" />
                    </div> 
                ))}
            </div>
            {isVisivleModal && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-slate-700/70 z-50">
                    <div className="w-full h-full flex flex-col">
                        <div>
                            <button onClick={() => setIsVisibleModal(false)} className="p-2 text-white">Close</button>
                        </div>
                        <Carousel images={images} clickImage={clickImage} />
                    </div>
                </div>
            )
                
            }
        </div>
    );
}

export default FavoritePhoto;