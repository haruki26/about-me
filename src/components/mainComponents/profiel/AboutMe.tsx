import { FC } from "react";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import Interest from "./Interest";
import MyInfo from "./MyInfo";

const AboutMe: FC = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="p-2 flex gap-2">
                <MdSentimentSatisfiedAlt size={"3.5rem"} />
                <h2 className="font-zenKurenaido font-semibold text-5xl">About me</h2>
            </div>
            <MyInfo />
            <Interest />
        </div>
    );
};

export default AboutMe;


