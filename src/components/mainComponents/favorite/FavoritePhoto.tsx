import { FC } from "react";
import Carousel from "./Carousel";

import kaigan from "../../../assets/images/kaigan.jpg"
import kaigan2 from "../../../assets/images/kaigan2.jpg"
import kibune from "../../../assets/images/kibune.jpg"
import sakura from "../../../assets/images/sakura.jpg"
import toudai from "../../../assets/images/toudai.jpg"
import tunosima from "../../../assets/images/tunosima.jpg"
import { MdOutlineCameraAlt } from "react-icons/md";

const FavoritePhoto: FC = () => {
    const images = [
        (<img src={kaigan} alt="kaigan" className="w-full h-full object-cover" />),
        (<img src={kaigan2} alt="kaigan2" className="w-full h-full object-cover" />),
        (<img src={kibune} alt="kibune" className="w-full h-full object-cover" />),
        (<img src={sakura} alt="sakura" className="w-full h-full object-cover" />),
        (<img src={toudai} alt="toudai" className="w-full h-full object-cover" />),
        (<img src={tunosima} alt="tunosima" className="w-full h-full object-cover" />)
    ];

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
                <MdOutlineCameraAlt className="my-auto" size={"2rem"} />
                <h2 className="font-kosugiMaru text-2xl md:text-3xl">Photo</h2>
            </div>
            <Carousel images={images} />
        </div>
    );
}

export default FavoritePhoto;