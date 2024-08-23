import { FC } from "react";
import FavoritePhoto from "./favorite/FavoritePhoto";
import Baking from "./favorite/Baking";
import Food from "./favorite/Food";

const FavoriteMain: FC = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center gap-10 md:gap-3">
                <FavoritePhoto />
                <Baking />
                <Food />
            </div>
        </div>
    );
};

export default FavoriteMain;