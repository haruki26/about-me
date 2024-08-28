import { FC } from "react";
import tart from "./../../../assets/images/tart.jpg"
import sea from "./../../../assets/images/kaigan.jpg"
import Thumbnail from "./Thumbnail";

export const FavoriteThumbnail: FC = () => {
    return (
        <Thumbnail title="Favorite" path="/favorite">
            <div className="font-kosugiMaru flex flex-col items-center justify-center gap-2 mx-auto">
                <div className="w-full text-left mx-1">
                    <p>お菓子作り、きれいな景色を見たり写真を撮ることが好きです</p>
                </div>
                <div className="w-full flex gap-7">
                    <img src={tart} alt="tart" className="object-cover rounded-md w-36 h-20" />
                    <img src={sea} alt="sea" className="object-cover rounded-md w-36 h-20" />
                </div>
            </div>
        </Thumbnail>
    );
};
