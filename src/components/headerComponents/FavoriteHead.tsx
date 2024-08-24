import { FC } from "react";

const FavoriteHead: FC = () => {
    return (
        <div className="w-full min-h-96 px-5 flex flex-col gap-10 items-center justify-center">
            <h1 className="font-zenKurenaido font-semibold text-5xl md:text-7xl">Favorite</h1>
            <p className="font-kosugiMaru text-center text-2xl md:text-4xl">好きなものやお気に入りの写真を紹介します</p>
        </div>
    );
};

export default FavoriteHead;