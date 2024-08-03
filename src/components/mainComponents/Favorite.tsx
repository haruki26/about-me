import { FC } from "react";
import Carousel from "./favorite/Carousel";

const Favorite: FC = () => {
    return (
        <div>
            <div>
                <h2 className="font-kosugiMaru text-2xl text-center">Photo</h2>
                <Carousel />
            </div>
            <div>
                <h2 className="font-kosugiMaru text-2xl text-center">Baking</h2>
            </div>
        </div>
    );
};

export default Favorite;