import { FC } from "react";
import { LuCake } from "react-icons/lu";
import { MdOutlineCameraAlt } from "react-icons/md";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { TbUserHeart } from "react-icons/tb";
import IconTitle from "../../IconTitle";

const MyInfo: FC = () => {
    const contents = [
        {
            title: (
                <IconTitle gap={2}>
                    <RiAccountPinBoxLine size={"2.5rem"} />
                    <h3>名前</h3>
                </IconTitle>
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
                <IconTitle gap={2}>
                    <LuCake size={"2rem"} />
                    <h3>誕生日</h3>
                </IconTitle>
            ),
            content: (
                <p>8月26日</p>
            )
        },
        {
            title: (
                <IconTitle gap={2}>
                    <TbUserHeart size={"2rem"} />
                    <h3>MBTI</h3>
                </IconTitle>
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
                <IconTitle gap={2}>
                    <MdOutlineCameraAlt size={"2rem"} />
                    <h3>趣味</h3>
                </IconTitle>
            ),
            content: (
                <ul className="list-none">
                    <li>綺麗な景色を見る</li>
                    <li>写真を撮る</li>
                    <li>お菓子作り</li>
                    <li>星を見る</li>
                </ul>
            )
        }
    ]

    return (
        <div className="px-5 py-3 flex flex-col gap-5 mx-auto font-kosugiMaru text-2xl md:w-3/4 md:gap-0">
            {contents.map(({title, content}, index) => (
                <div key={index} className="w-full flex flex-col gap-5 md:gap-0">
                    <div className="w-full flex flex-col gap-1 md:flex-row md:py-1 md:relative">
                        <div className={`flex gap-1 md:w-1/3`}>
                            <div className="md:m-auto">
                                {title}
                            </div>
                        </div>
                        <div className="m-3 hidden md:inline-block">
                            <span className="min-h-full border absolute top-0 bottom-0" />
                        </div>
                        <div className="p-3 h-full">
                            {content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyInfo;