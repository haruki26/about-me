import { FC } from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const Interest: FC = () => {
    return (
        <div className="w-5/6 flex flex-col gap-3 mx-auto">
            <div className="p-2 flex gap-2">
                <AiOutlineDeploymentUnit size={"2.5rem"} />
                <h2 className="font-zenKurenaido font-semibold text-5xl">Interest</h2>
            </div>
            <div className="px-5 font-kosugiMaru text-2xl flex flex-col gap-10 md:gap-5">
                <p>高校在学時にプログラミングに興味を持ちC言語、Pythonを学びました。</p>
                <p>学校の課題で電子工作に取り組み、RaspberryPi PicoやArduinoに触れました。</p>
                <p>
                    専門学校に入学後はWeb制作にハマりました。
                    このサイトはReact、TypeScript、TailWind CSS、daisyUIを使用し作成しました。
                </p>
            </div>
        </div>
    );
}

export default Interest;