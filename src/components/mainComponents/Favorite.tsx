import { FC, useState } from "react";
import FavoritePhoto from "./favorite/FavoritePhoto";
import Baking from "./favorite/Baking";
import Foods from "./favorite/Foods";

const Favorite: FC = () => {
    const contents = [
        { title: "Photos", main: <FavoritePhoto /> },
        { title: "Baking", main: <Baking /> },
        { title: "Foods", main: <Foods /> }
    ]

    const [isVisivleContent, setIsVisibleContent] = useState<JSX.Element | null>(null)

    const handleContent = (index: number) => {
        setIsVisibleContent(contents[index].main)
    }

    return (
        <div className="w-full flex flex-col">
            <div className="mockup-phone">
                <div className="camera" />
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <div className={`w-full h-full flex gap-10 ${(isVisivleContent !== null) && "overflow-x-scroll"}`}>
                            <div className="min-w-full m-auto flex flex-col gap-5">
                                {contents.map(({title}, index) => (
                                    <label
                                    key={index}
                                    className="underline text-3xl font-bold font-zenKurenaido text-center"
                                    onClick={() => handleContent(index)}>
                                        {title}
                                    </label>
                                ))}
                            </div>
                            <div className="min-w-full flex flex-col px-3 py-5 overflow-y-scroll">
                                <label
                                role="button"
                                onClick={() => setIsVisibleContent(null)}
                                className="w-full p-2 sticky top-0 underline text-3xl font-bold font-zenKurenaido">
                                    close
                                </label>
                                {isVisivleContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorite;