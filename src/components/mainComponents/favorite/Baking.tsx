import { FC } from "react";
import { LuCakeSlice } from "react-icons/lu";
import Carousel from "./Carousel";

import bushdenoel from "../../../assets/images/bushbenoel.jpg"
import cheesecake from "../../../assets/images/cheesecake.jpg"
import creampuff from "../../../assets/images/creampuff.jpg"
import tart from "../../../assets/images/tart.jpg"

const Baking: FC = () => {
    const images = [
        (<img src={bushdenoel} alt="bushdenoel" className="w-full h-full object-cover" />),
        (<img src={cheesecake} alt="cheesecake" className="w-full h-full object-cover" />),
        (<img src={creampuff} alt="creempuff" className="w-full h-full object-cover" />),
        (<img src={tart} alt="tart" className="w-full h-full object-cover" />)
    ];

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
                <LuCakeSlice className="my-auto" size={"2rem"} />
                <h2 className="font-kosugiMaru text-2xl md:text-3xl">Baking</h2>
            </div>
            <Carousel images={images} />
        </div>
    );
};

export default Baking;