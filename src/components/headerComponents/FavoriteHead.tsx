import { FC } from "react";
import HeaderFrame from "./HeaderFrame";

const FavoriteHead: FC = () => {
    return (
        <HeaderFrame>
            <h1 className="font-zenKurenaido font-semibold text-5xl md:text-7xl">Favorite</h1>
            <span className="font-kosugiMaru text-center text-2xl md:text-4xl">好きなものやお気に入りの写真を紹介します</span>
        </HeaderFrame>
    );
};

export default FavoriteHead;