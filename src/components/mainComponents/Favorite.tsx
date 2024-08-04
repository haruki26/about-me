import { FC } from "react";
import FavoritePhoto from "./favorite/FavoritePhoto";
import Baking from "./favorite/Baking";

const Favorite: FC = () => {
    return (
        <div className="p-auto w-full">
            <div className="flex flex-col justify-center gap-10 md:flex-row md:gap-3">
                <FavoritePhoto />
                <Baking />
            </div>
        </div>
    );
};

export default Favorite;