import { FC, MouseEvent, useRef, useState } from "react";
import FavoritePhoto from "./favorite/FavoritePhoto";
import Baking from "./favorite/Baking";
import Foods from "./favorite/Foods";

const Favorite: FC = () => {
    const contents = [
        { title: "Photos", main: <FavoritePhoto /> },
        { title: "Baking", main: <Baking /> },
        { title: "Foods", main: <Foods /> }
    ]

    const titleRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [isVisivleContent, setIsVisibleContent] = useState<JSX.Element | null>(null)

    const handleContent = (index: number) => {
        setIsVisibleContent(contents[index].main)
        
        contentRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        });
    }

    const handleBackBtn = () => {
        titleRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        });

        setIsVisibleContent(null)
    }

    return (
        <div className="w-full flex flex-col">
            <div className="mockup-phone">
                <div className="camera" />
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <div className={`w-full h-full flex gap-10 snap-mandatory snap-x ${(isVisivleContent !== null) ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
                            <div ref={titleRef} className="min-w-full m-auto flex flex-col gap-5 snap-center">
                                {contents.map(({title}, index) => (
                                    <label
                                    key={index}
                                    className="underline text-3xl font-bold font-zenKurenaido text-center"
                                    onClick={() => handleContent(index)}>
                                        {title}
                                    </label>
                                ))}
                            </div>
                            <div ref={contentRef} className="min-w-full flex flex-col px-3 py-5 snap-center overflow-y-scroll">
                                <label
                                role="button"
                                onClick={handleBackBtn}
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