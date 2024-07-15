import { FC } from "react";
import { LuCake } from "react-icons/lu";
import { MdOutlineCameraAlt, MdSentimentSatisfiedAlt } from "react-icons/md";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { TbUserHeart } from "react-icons/tb";
import IntroduceContents from "./introduceContents";
import { TableContents } from "../../types/TableContents";

const AboutMe: FC = () => {
    const contents: TableContents[] = [
        {
            title: (
                <>
                    <RiAccountPinBoxLine size={"2rem"} />
                    <h3>名前</h3>
                </>
            ),
            content: (
                <>
                    <p>久保 陽生</p>
                    <p>(くぼ はるき)</p>
                </>
            )
        },
        {
            title: (
                <>
                    <LuCake size={"2rem"} />
                    <h3>誕生日</h3>
                </>
            ),
            content: (
                <>
                    <p>8月26日</p>
                </>
            )
        },
        {
            title: (
                <>
                    <TbUserHeart size={"2rem"} />
                    <h3>MBTI</h3>
                </>
            ),
            content: (
                <>
                    <p>ISTP-T</p>
                    <p>
                        (<a href="https://www.16personalities.com/" className="underline font-bold">16Personalirties</a>)
                    </p>
                </>
            )
        },
        {
            title: (
                <>
                    <MdOutlineCameraAlt size={"2rem"} />
                    <h3>趣味</h3>
                </>
            ),
            content: (
                <>
                    <ul className="list-none">
                        <li>綺麗な景色を見る</li>
                        <li>写真を撮る</li>
                        <li>お菓子作り</li>
                        <li>星を見る</li>
                    </ul>
                </>
            )
        }
    ];

    return (
        <>
        <div className="flex flex-col">
            <div className="p-2 flex gap-2">
                <MdSentimentSatisfiedAlt size={"3.5rem"} />
                <h2 className="font-zenKurenaido font-semibold text-5xl">About me</h2>
            </div>
            <div className="px-5 py-3 mx-auto font-kosugiMaru md:w-3/4">
                {contents.map((content: TableContents, index: number) => (
                    <IntroduceContents key={index} contents={content} divTitleFraction="1/3" />
                ))}
            </div>
        </div>
        </>
    );
};

export default AboutMe;