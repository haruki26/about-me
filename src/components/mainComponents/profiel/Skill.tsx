import { TiPencil, TiSpannerOutline } from "react-icons/ti";
import flower from "../../../assets/images/flower.jpg";
import { FC } from "react";
import IconTitle from "../../IconTitle";
import SkillSets from "./SkillSet";
import { TbBooks } from "react-icons/tb";
import useIconSize from "../../../hooks/useIconSize";

const Skill: FC = () => {
    const iconSize = useIconSize({
        iconSize: 3.5,
        breakPoint: "md",
        largeIconSize: 4.5
    })

    return (
        <>
        <div className="p-2 flex gap-2">
            <IconTitle gap={2} className="p-2">
                <TiSpannerOutline size={iconSize} />
                <h2 className="font-zenKurenaido font-semibold text-5xl">Skil</h2>
            </IconTitle>
        </div>
        <div className="px-5 py-2 flex flex-col gap-8">
            <div className="font-kosugiMaru text-4xl flex flex-col gap-2">
                <p className="text-center">花冠が作れます</p>
                <img src={flower} alt="花冠" className="rounded-xl object-cover w-60 h-44 object-top mx-auto" />
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-10">
                <SkillSets className="font-kosugiMaru text-xl">
                    <IconTitle gap={2} className="mx-auto">
                        <TbBooks size={"2.5rem"} />
                        <h3 className="text-2xl my-auto md:text-center">言語・ライブラリ<br />フレームワーク</h3>
                    </IconTitle>
                    <p>HTML / CSS</p>
                    <p>JavaScript / TypeScript</p>
                    <p>React / Tailwind / daisyUI</p>
                    <p>C言語 / C++</p>
                    <p>Python / Tkinter</p>
                    <p>MicroPython / Arduino</p>
                </SkillSets>
                <SkillSets className="font-kosugiMaru text-xl">
                    <IconTitle gap={2} className="mx-auto md:py-3">
                        <TiPencil size={"2.5rem"} />
                        <h3 className="text-2xl my-auto md:text-center">資格・検定</h3>
                    </IconTitle>
                    <p>基本情報技術者</p>
                    <p>情報技術検定1級</p>
                    <p>AI-900 / DP-900 / AZ-900</p>
                    <p>第2種電気工事士</p>
                    <p>漢字検定2級</p>
                </SkillSets>
            </div>
        </div>
        </>
    );
};

export default Skill;