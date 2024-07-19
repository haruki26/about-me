import { FC } from "react";
import { LuCake } from "react-icons/lu";
import { MdOutlineCameraAlt } from "react-icons/md";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { TbUserHeart } from "react-icons/tb";
import IntroduceContents from "./introduceContents";

const MyInfo: FC = () => {
    return (
        <div className="px-5 py-3 flex flex-col gap-5 mx-auto font-kosugiMaru text-2xl md:w-3/4 md:gap-0">
            {[{
                title: (
                    <div className="flex gap-2">
                        <RiAccountPinBoxLine size={"2rem"} />
                        <h3>名前</h3>
                    </div>
                    ),
                    content: (
                    <div className="flex flex-col gap-2 md:flex-row">
                        <p>久保 陽生</p>
                        <p>(くぼ はるき)</p>
                    </div>
                    )
                },
                {
                    title: (
                    <div className="flex gap-2">
                        <LuCake size={"2rem"} />
                        <h3>誕生日</h3>
                    </div>
                    ),
                    content: (
                    <p>8月26日</p>
                    )
                },
                {
                    title: (
                    <div className="flex gap-2">
                        <TbUserHeart size={"2rem"} />
                        <h3>MBTI</h3>
                    </div>
                    ),
                    content: (
                    <div className="flex flex-col gap-2 md:flex-row">
                        <p>ISTP-T</p>
                        <p>
                            (<a href="https://www.16personalities.com/" className="underline font-bold">16Personalirties</a>)
                        </p>
                    </div>
                    )
                },
                {
                    title: (
                    <div className="flex gap-2">
                        <MdOutlineCameraAlt size={"2rem"} />
                        <h3>趣味</h3>
                    </div>
                    ),
                    content: (
                    <ul className="list-none">
                        <li>綺麗な景色を見る</li>
                        <li>写真を撮る</li>
                        <li>お菓子作り</li>
                        <li>星を見る</li>
                    </ul>
                    )
                }].map(({title, content}, index) => (
                    <IntroduceContents key={index} title={title} content={content} />
            ))}
        </div>
    );
};

export default MyInfo;