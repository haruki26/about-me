import { FC } from "react";
import { LuCake } from "react-icons/lu";
import { MdOutlineCameraAlt, MdSentimentSatisfiedAlt } from "react-icons/md";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { TbUserHeart } from "react-icons/tb";

const AboutMe: FC = () => {
    return (
        <>
        <div className="flex flex-col">
            <div className="p-2 flex gap-2">
                <MdSentimentSatisfiedAlt size={"3.5rem"} />
                <h2 className="font-zenKurenaido font-semibold text-5xl">About Me</h2>
            </div>
            <div className="px-5 py-2 flex flex-col gap-2 font-kosugiMaru">
                <div className="flex flex-col gap-1">
                    <div className="flex text-2xl gap-2">
                        <RiAccountPinBoxLine size={"2rem"} />
                        <h3 className="mr-1">名前</h3>
                        <span className="hidden">:</span>
                    </div>
                    <div className="p-3 flex gap-2 text-2xl">
                        <p>久保 陽生</p>
                        <p>(くぼ はるき)</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex text-2xl gap-2">
                        <LuCake size={"2rem"} />
                        <h3 className="mr-1">誕生日</h3>
                        <span className="hidden">:</span>
                    </div>
                    <div className="p-3 flex gap-3 text-2xl">
                        <p>8月26日</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex text-2xl gap-2">
                        <TbUserHeart size={"2rem"} />
                        <h3 className="mr-1">MBTI</h3>
                        <span className="hidden ">:</span>
                    </div>
                    <div className="p-3 flex gap-3 text-2xl">
                        <p>ISTP-T</p>
                        <p>
                            (<a href="https://www.16personalities.com/" className="underline font-bold">16Personalirties</a>)
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex text-2xl gap-2">
                        <MdOutlineCameraAlt size={"2rem"} />
                        <h3 className="mr-1">趣味</h3>
                        <span className="hidden">:</span>
                    </div>
                    <div className="p-3 flex gap-3 text-2xl">
                        <ul className="list-none">
                            <li>プログラミング</li>
                            <li>音楽鑑賞</li>
                            <li>散歩</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutMe;