import { TiPencil, TiSpannerOutline } from "react-icons/ti";
import flower from "../../assets/images/flower.jpg";
import { FC } from "react";
import { TbBooks } from "react-icons/tb";

const Skil: FC = () => {
    return (
        <>
        <div className="flex flex-col">
            <div className="p-2 flex gap-2">
                <TiSpannerOutline size={"3.5rem"} />
                <h2 className="font-zenKurenaido font-semibold text-5xl">Skil</h2>
            </div>
            <div className="px-5 py-2 flex flex-col gap-8 md:mt-5 md:gap-20">
                <div className="font-kosugiMaru text-4xl flex flex-col gap-2 md:gap-7">
                    <h3 className="text-center md:text-7xl">花冠が作れます</h3>
                    <img src={flower} alt="花冠" className="rounded-xl object-cover w-60 h-44 object-top mx-auto md:w-96 md:h-80" />
                </div>
                <div className="flex flex-col justify-center gap-2 md:mx-auto md:flex-row md:gap-10">
                    <div className="font-kosugiMaru text-xl flex flex-col gap-1.5">
                        <div className="flex gap-2 my-3 justify-center">
                            <TbBooks size={"2.5rem"} />
                            <h3 className="text-3xl text-left md:text-center md:text-3xl">言語・ライブラリ</h3>
                        </div>
                        <li className="list-none px-2 md:text-center md:text-2xl md:space-y-2">
                            <ul className="flex gap-3 justify-center">
                                <p>HTML</p>
                                <span>/</span>
                                <p>CSS</p>
                                <span>/</span>
                                <p>JavaScript</p>
                            </ul>
                            <ul className="flex gap-3 justify-center">
                                <p>TypeScript</p>
                                <span>/</span>
                                <p>React</p>
                            </ul>
                            <ul className="flex gap-3 justify-center">
                                <p>C言語</p>
                                <span>/</span>
                                <p>C++</p>
                            </ul>
                            <ul className="flex gap-3 justify-center">
                                <p>Python</p>
                                <span>/</span>
                                <p>tkinter</p>
                            </ul>
                            <ul className="flex gap-3 justify-center">
                                <p>MicroPython</p>
                                <span>/</span>
                                <p>Arduino</p>
                            </ul>
                        </li>
                        <p className="text-center py-3 md:text-2xl ">全て勉強中です</p>
                    </div>
                    <div className="font-kosugiMaru text-xl flex flex-col gap-1.5">
                        <div className="flex gap-2 my-3 justify-center">
                            <TiPencil size={"2.5rem"} />
                            <h3 className="text-3xl md:text-3xl">資格・検定</h3>
                        </div>
                        <li className="list-none px-2 space-y-2 md:text-center md:text-2xl">
                            <ul className="flex flex-col gap-2 items-center ">
                                <p>基本情報技術者</p>
                                <p>情報技術検定1級</p>
                            </ul>
                            <ul className="flex gap-3 justify-center">
                                <p>AI-900</p>
                                <span>/</span>
                                <p>DP-900</p>
                            </ul>
                            <ul className="flex gap-3 justify-center">
                                <p>第2種電気工事士</p>
                            </ul>
                            <ul className="flex gap-3 justify-center">
                                <p>危険物乙種4類</p>
                            </ul>
                            <ul className="flex gap-3 justify-center">
                                <p>漢字検定2級</p>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Skil;