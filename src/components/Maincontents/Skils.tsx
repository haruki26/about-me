import { TiPencil, TiSpannerOutline } from "react-icons/ti";
import flower from "../../assets/images/flower.jpg";
import { FC } from "react";
import { TbBooks } from "react-icons/tb";
import { TableContents } from "../../types/TableContents";
import IntroduceContents from "./introduceContents";

const Skil: FC = () => {
    const contents: TableContents[] = [
        {
            title: (
                <>
                <div className="flex gap-3 mx-auto">
                    <TiPencil size={"2rem"} className="my-auto" />
                    <div className="flex gap-1 md:flex-col md:text-center">
                        <h3>資格</h3>
                        <h3 className="md:hidden">・</h3>
                        <h3>検定</h3>
                    </div>
                </div>
                </>
            ),
            content: (
                <>
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <p>基本情報技術者</p>
                    </div>
                    <div className="flex gap-2">
                        <p>情報技術検定1級</p>
                    </div>
                    <div className="flex gap-2">
                        <p>AI-900</p>
                        <span>/</span>
                        <p>DP-900</p>
                    </div>
                    <div className="flex gap-2">
                        <p>第2種電気工事士</p>
                    </div>
                    <div className="flex gap-2">
                        <p>危険物乙種4類</p>
                    </div>
                    <div className="flex gap-2">
                        <p>漢字検定2級</p>
                    </div>
                </div>
                </>
            )
        }
    ]
    
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
                <div className="font-kosugiMaru mx-auto">
                    <div className="flex gap-2">
                        <TbBooks size={"2.5rem"} className="my-auto" />
                        <h3 className="text-2xl py-1 flex flex-col md:flex-row">
                            <span>言語・ライブラリ</span>
                            <span><span className="hidden md:inline-block">・</span>フレームワーク</span>
                        </h3>
                    </div>
                    <div className="px-3 mx-auto md:w-4/5">
                        {[
                            {
                                title: (
                                    <>
                                    <div className="w-full flex flex-col mx-auto md:items-center">
                                        <div className="flex gap-2">
                                            <p>HTML</p>
                                            <span>/</span>
                                            <p>CSS</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>JavaScript</p>
                                            <span>/</span>
                                            <p>TypeScript</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>React</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>Tailwind CSS</p>
                                            <span>/</span>
                                            <p>daisyUI</p>
                                        </div>
                                    </div>
                                    </>
                                ),
                                content: (
                                    <>
                                    <div className="my-auto">
                                        <p>このサイトはReact、TypeScript、Tailwind CSS、daisyUIを使用して作成しました</p>
                                    </div>
                                    </>
                                )
                            },
                            {
                                title: (
                                    <>
                                    <div className="flex gap-2 min-w-full">
                                        <p>C言語</p>
                                        <span>/</span>
                                        <p>C++</p>
                                    </div>
                                    </>
                                ),
                                content: (
                                    <>
                                    <p>
                                        <a
                                        href="https://www.sbcr.jp/product/4797392586/"
                                        className="underline">
                                            やさしいC
                                        </a>、
                                        <a
                                        href="https://9cguide.appspot.com/s_start.html"
                                        className="underline">
                                            苦C
                                        </a>
                                        を使い学習しています
                                    </p>
                                    </>
                                )
                            },
                            {
                                title: (
                                    <>
                                    <div className="flex gap-2">
                                        <p>Python</p>
                                        <span>/</span>
                                        <p>tkinter</p>
                                    </div>
                                    </>
                                ),
                                content: (
                                    <>
                                    <div className="w-full ">
                                        <p>学習期間:4ヶ月</p>
                                        <p></p>
                                    </div>
                                    </>
                                )
                            },
                            {
                                title: (
                                    <>
                                    <div className="flex gap-2">
                                        <p>MicroPython</p>
                                        <span>/</span>
                                        <p>Arduino</p>
                                    </div>
                                    </>
                                ),
                                content: (
                                    <>
                                    <div className="w-full w-">
                                        <p>学習期間:4ヶ月</p>
                                        <p></p>
                                    </div>
                                    </>
                                )
                            }
                        ].map((content: TableContents, index: number) => (
                            <IntroduceContents key={index} contents={content} divTitleFraction={"1/2"} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Skil;