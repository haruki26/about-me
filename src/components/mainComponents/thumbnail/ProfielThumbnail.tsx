import { FC } from "react";
import icon from "./../../../assets/images/icon.jpg"
import Thumbnail from "./Thumbnail";

export const ProfieilThumbnail: FC = () => {
    return (
        <Thumbnail title="Profiel" path="/profiel">
            <div className="flex items-center justify-center gap-2">
                <div className="font-kosugiMaru text-left mx-1">
                    <p>久保陽生といいます</p>
                    <p>専門学生です</p>
                    <p>Python、Web制作などについて学んでます</p>
                </div>
                <div className="avatar">
                    <div className="rounded-xl w-32">
                        <img src={icon} alt="icon" className="aspect-square object-cover" />
                    </div>
                </div>
            </div>
        </Thumbnail>
    );
};
