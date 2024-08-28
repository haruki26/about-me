import { FC } from "react";
import Thumbnail from "./Thumbnail";

export const CreateThumbnail: FC = () => {
    return (
        <Thumbnail title="Create" path="/create">
            <div className="font-kosugiMaru px-2">
                <div className="w-full flex flex-col gap-2 text-left mx-1">
                    <p>作ったものの概要や、作っている過程で詰まった点をまとめています。</p>
                    <p>今はこのサイトについてしか載っていません。</p>
                </div>
            </div>
        </Thumbnail>
    );
};