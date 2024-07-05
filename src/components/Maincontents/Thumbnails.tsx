import CreateThumbnail from "./CreateThumbnail";
import FavoriteThumbnail from "./FavoriteThumbnail";
import ProfieilThumbnail from "./ProfielThumbnail";

const Thumbnails = () => {
    return (
        <div className="w-full font-zenKurenaido px-1 py-2">
            <div className="pb-3">
                <h2 className="text-center text-3xl">Thumbnails</h2>
            </div>
            <div className="flex flex-col items-center gap-5 mx-auto px-2 py-1">
                <ProfieilThumbnail />
                <FavoriteThumbnail />
                <CreateThumbnail />
            </div>
        </div>
    );
};

export default Thumbnails;