import { FC } from "react";
import GridPhotos from "./GridPhotos";

import bushdenoel from "../../../assets/images/bake/bushbenoel.jpg"
import cake from "../../../assets/images/bake/cake.jpg"
import cheesecake from "../../../assets/images/bake/cheesecake.jpg"
import gateauchocolat from "../../../assets/images/bake/gateauchocolat.jpg"
import snowballcookie from "../../../assets/images/bake/snowballcookie.jpg"
import tart from "../../../assets/images/bake/tart.jpg"

const Baking: FC = () => {
    const images = [
        (<img src={bushdenoel} alt="bushdenoel" className="w-full h-full object-cover" />),
        (<img src={cake} alt="cake" className="w-full h-full object-cover" />),
        (<img src={gateauchocolat} alt="gateushocolat" className="w-full h-full object-cover" />),
        (<img src={snowballcookie} alt="snowbollcookie" className="w-full h-full object-cover" />),
        (<img src={cheesecake} alt="cheesecake" className="w-full h-full object-cover" />),
        (<img src={tart} alt="tart" className="w-full h-full object-cover" />)
    ];

    return (
        <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl font-bold font-zenKurenaido text-center md:text-5xl">Baking</h2>
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
};

export default Baking;