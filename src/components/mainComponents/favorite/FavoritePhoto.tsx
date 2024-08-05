import { FC } from "react";

import kaigan from "../../../assets/images/photo/kaigan.jpg"
import arasiyama from "../../../assets/images/photo/arasiyama.jpg"
import kibune from "../../../assets/images/photo/kibune.jpg"
import kibune2 from "../../../assets/images/photo/kibune2.jpg"
import kiyomizu from "../../../assets/images/photo/kiyomizu.jpg"
import higanbana from "../../../assets/images/photo/higanbana.jpg"
import sakura from "../../../assets/images/photo/sakura.jpg"
import dazaihu from "../../../assets/images/photo/dazaihu.jpg"
import toudai from "../../../assets/images/photo/toudai.jpg"

import GridPhotos from "./GridPhotos";

const FavoritePhoto: FC = () => {
    const images = [
        (<img src={kaigan} alt="kaigan" className="w-full h-full object-cover" />),
        (<img src={arasiyama} alt="arasiyama" className="w-full h-full object-cover" />),
        (<img src={kiyomizu} alt="kiyomizu" className="w-full h-full object-cover" />),
        (<img src={dazaihu} alt="dazaihu" className="w-full h-full object-cover" />),
        (<img src={higanbana} alt="higannbana" className="w-full h-full object-cover" />),
        (<img src={kibune2} alt="kibune2" className="w-full h-full object-cover" />),
        (<img src={kibune} alt="kibune" className="w-full h-full object-cover" />),
        (<img src={sakura} alt="sakura" className="w-full h-full object-cover" />),
        (<img src={toudai} alt="toudai" className="w-full h-full object-cover" />),
    ];

    return (
        <div className="flex flex-col items-center gap-5">
            <h2 className="text-3xl font-bold font-zenKurenaido text-center md:text-5xl">Photos</h2>
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
        </div>
    );
}

export default FavoritePhoto;