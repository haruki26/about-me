import { FC } from "react";

import kaigan from "../../../assets/images/kaigan.jpg"
import kaigan2 from "../../../assets/images/kaigan2.jpg"
import kibune from "../../../assets/images/kibune.jpg"
import sakura from "../../../assets/images/sakura.jpg"
import toudai from "../../../assets/images/toudai.jpg"
import tunosima from "../../../assets/images/tunosima.jpg"
import GridPhotos from "./GridPhotos";

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
        <div className="mockup-phone">
            <div className="camera" />
            <div className="display">
                <div className="artboard artboard-demo phone-1">
                    <div className="w-full h-full flex flex-col gap-5 px-2 py-10 font-kosugiMaru overflow-scroll">
                        <GridPhotos images={images} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavoritePhoto;