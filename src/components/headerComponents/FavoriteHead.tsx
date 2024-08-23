import { FC } from "react";

const FavoriteHead: FC = () => {
    return (
        <div className="w-full h-3/4 flex flex-col gap-5 items-center justify-center">
            <h1 className="text-7xl text-center">Favorite</h1>
            <p className="text-4xl text-center">好きなものを紹介します</p>
        </div>
    );
};

export default FavoriteHead;