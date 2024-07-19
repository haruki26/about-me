import { TiPencil, TiSpannerOutline } from "react-icons/ti";
import flower from "../../../assets/images/flower.jpg";
import { FC } from "react";
import { TbBooks } from "react-icons/tb";

const Skil: FC = () => {
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
                <div className="font-kosugiMaru text-xl flex flex-col gap-1.5 mx-auto md:mx-12">
                    <div className="flex gap-2 mx-auto md:py-3">
                        <TiPencil size={"2.5rem"} className="my-auto" />
                        <h3 className="text-2xl my-auto text-center">資格・検定</h3>
                    </div>
                    <div className="px-2 text-xl text-center flex flex-col gap-2">
                        <p>基本情報技術者</p>
                        <p>情報技術検定1級</p>
                        <p>AI-900 / DP-900</p>
                        <p>第2種電気工事士</p>
                        <p>漢字検定2級</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Skil;