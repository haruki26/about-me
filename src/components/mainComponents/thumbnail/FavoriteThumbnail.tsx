import { FC } from "react";
import tart from "./../../assets/images/tart.jpg"
import sea from "./../../assets/images/kaigan.jpg"

const FavoriteThumbnail: FC = () => {
    return (
        <>
        <div className="card glass max-w-sm animate-fade-in-bottom">
            <div className="card-body w-full">
                <h2 className="card-title mb-2 text-2xl">Favorite</h2>
                <div className="font-kosugiMaru flex flex-col items-center justify-center gap-2 mx-auto">
                    <div className="w-full text-left mx-1">
                        <p>お菓子作り、きれいな景色を見たり写真を撮ることが好きです</p>
                    </div>
                    <div className="w-full flex gap-7">
                        <div className="flex flex-col gap-1">
                            <img src={tart} alt="tart" className="object-cover rounded-md w-36 h-20" />
                            <span className="text-center">いちごタルト</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <img src={sea} alt="sea" className="object-cover rounded-md w-36 h-20" />
                            <span className="text-center">地元の海岸</span>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-ghost text-2xl">More</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default FavoriteThumbnail;