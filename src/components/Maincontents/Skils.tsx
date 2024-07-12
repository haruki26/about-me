import { TiSpannerOutline } from "react-icons/ti";
import flower from "../../assets/images/flower.jpg";

const Skil = () => {
    return (
        <>
        <div className="max-w-screen-md flex flex-col md:mx-auto">
            <div className="p-2 flex gap-2">
                <TiSpannerOutline size={"3.5rem"} />
                <h1 className="font-zenKurenaido font-semibold text-5xl">Skil</h1>
            </div>
            <div className="px-5 py-2 flex flex-col gap-8 md:mt-5 md:gap-20">
                <div className="font-kosugiMaru text-4xl flex flex-col gap-2 md:gap-7">
                    <p className="text-center md:text-7xl">花冠が作れます</p>
                    <img src={flower} alt="花冠" className="rounded-xl object-cover w-60 h-44 object-top mx-auto md:w-96 md:h-80" />
                </div>
                <div className="mx-auto flex flex-col justify-center gap-2 md:flex-row md:gap-10">
                    <div className="font-kosugiMaru text-xl flex flex-col gap-1.5">
                        <h2 className="text-3xl text-left my-3 md:text-center">言語・ライブラリ</h2>
                        <li className="list-none px-2">
                            <ul>HTML / CSS / JavaScript</ul>
                            <ul>React /  TypeScript</ul>
                            <ul>C言語 / C++ / Python</ul>
                        </li>
                        <p className="px-1">全て勉強中です</p>
                    </div>
                    <div className="font-kosugiMaru text-xl flex flex-col gap-1.5">
                        <h2 className="text-3xl text-left my-3 md:text-center">資格・検定</h2>
                        <li className="list-none px-2">
                            <ul>基本情報技術者 / 情報技術検定1級</ul>
                            <ul>AI-900 / DP-900</ul>
                            <ul>第2種電気工事士</ul>
                            <ul>漢字検定2級</ul>
                        </li>     
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Skil;