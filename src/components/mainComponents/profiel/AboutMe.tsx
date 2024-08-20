import { FC } from "react";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import Interest from "./Interest";
import MyInfo from "./MyInfo";
import IconTitle from "../../IconTitle";
import useIconSize from "../../../hooks/useIconSize";

const AboutMe: FC = () => {
    const iconSize = useIconSize({
        iconSize: 3.5,
        breakPoint: "md",
        largeIconSize: 4.5
    })
    
    return (
        <div className="w-full flex flex-col">
            <IconTitle gap={2} className="p-2">
                <MdSentimentSatisfiedAlt size={iconSize} />
                <h2 className="font-zenKurenaido font-semibold text-5xl md:text-7xl">About me</h2>
            </IconTitle>
            <MyInfo />
            <Interest />
        </div>
    );
};

export default AboutMe;


