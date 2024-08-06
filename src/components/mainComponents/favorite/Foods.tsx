import { FC } from "react";
import GridPhotos from "./GridPhotos";

import curry from "../../../assets/images/food/curry.jpg"
import gyutan from "../../../assets/images/food/gyutan.jpg"
import jirou from "../../../assets/images/food/jirou.jpg"
import kunimax from "../../../assets/images/food/kunimax.jpg"
import ramen from "../../../assets/images/food/ramen.jpg"
import ramen2 from "../../../assets/images/food/ramen2.jpg"

const Foods: FC = () => {
    const images = [
        (<img src={curry} alt="curry" className="w-full h-full object-cover" />),
        (<img src={gyutan} alt="gyutan" className="w-full h-full object-cover" />),
        (<img src={jirou} alt="jirou" className="w-full h-full object-cover" />),
        (<img src={kunimax} alt="kunimax" className="w-full h-full object-cover" />),
        (<img src={ramen} alt="ramen" className="w-full h-full object-cover" />),
        (<img src={ramen2} alt="ramen2" className="w-full h-full object-cover" />)
    ];

    return (
        <div className="flex flex-col items-center gap-5">
            <div className="w-full h-full flex flex-col gap-5 px-2 py-10 font-kosugiMaru">
                <GridPhotos images={images} />
            </div>
        </div>
    );
};

export default Foods;