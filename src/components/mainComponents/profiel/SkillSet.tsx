import { FC } from "react";
import { TbBooks } from "react-icons/tb"

const SkillSet: FC = () => {
    return (
        <div className="font-kosugiMaru text-xl flex flex-col gap-1.5 mx-auto md:m-0">
            <div className="flex gap-2 mx-auto">
                <TbBooks size={"2.5rem"} className="my-auto" />
                <h3 className="text-2xl my-auto md:text-center">言語・ライブラリ<br />フレームワーク</h3>
            </div>
            <div className="px-3 text-xl text-center flex flex-col gap-2">
                <p>HTML / CSS</p>
                <p>JavaScript / TypeScript</p>
                <p>React / Tailwind / daisyUI</p>
                <p>C言語 / C++</p>
                <p>Python / Tkinter</p>
                <p>MicroPython / Arduino</p>
            </div>
        </div>
    );
};

export default SkillSet;