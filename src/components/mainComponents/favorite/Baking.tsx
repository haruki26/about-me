import { FC } from "react";

import bushdenoel from "../../../assets/images/bushbenoel.jpg"
import cheesecake from "../../../assets/images/cheesecake.jpg"
import creampuff from "../../../assets/images/creampuff.jpg"
import tart from "../../../assets/images/tart.jpg"
import GridPhotos from "./GridPhotos";

const Baking: FC = () => {
    const images = [
        (<img src={bushdenoel} alt="bushdenoel" className="w-full h-full object-cover" />),
        (<img src={cheesecake} alt="cheesecake" className="w-full h-full object-cover" />),
        (<img src={creampuff} alt="creempuff" className="w-full h-full object-cover" />),
        (<img src={tart} alt="tart" className="w-full h-full object-cover" />)
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
};

export default Baking;