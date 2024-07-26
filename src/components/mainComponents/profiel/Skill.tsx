import { TiSpannerOutline } from "react-icons/ti";
import flower from "../../../assets/images/flower.jpg";
import { FC } from "react";
import Qualificationlist from "./Qualificationlist";
import SkillSet from "./SkillSet";

const Skill: FC = () => {
    return (
        <>
        <div className="p-2 flex gap-2">
            <TiSpannerOutline size={"3.5rem"} />
            <h2 className="font-zenKurenaido font-semibold text-5xl">Skil</h2>
        </div>
        <div className="px-5 py-2 flex flex-col gap-8">
            <div className="font-kosugiMaru text-4xl flex flex-col gap-2">
                <p className="text-center">花冠が作れます</p>
                <img src={flower} alt="花冠" className="rounded-xl object-cover w-60 h-44 object-top mx-auto" />
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-3">
                <SkillSet />
                <Qualificationlist />
            </div>
        </div>
        </>
    );
};

export default Skill;