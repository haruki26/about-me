import { TiSpannerOutline } from "react-icons/ti";
import flower from "../../assets/images/flower.jpg";

const Skil = () => {
    return (
        <>
        <div className="p-2 flex gap-2">
            <TiSpannerOutline size={"3.5rem"} />
            <h1 className="font-zenKurenaido font-semibold text-5xl">Skil</h1>
        </div>
        <div className="px-5 py-2 flex flex-col gap-8">
            <div className="font-kosugiMaru text-4xl flex flex-col gap-2">
                <p className="text-center">花冠が作れます</p>
                <img src={flower} alt="花冠" className="rounded-xl object-cover w-60 h-44 object-top mx-auto" />
            </div>
            <div className="font-kosugiMaru text-xl flex flex-col gap-1.5">
                <p>React / HTML / CSS / TypeScript</p>
                <p>C言語 / Python</p>
            </div>
            <div className="font-kosugiMaru text-xl flex flex-col gap-1.5">
                <p>基本情報技術者 / 情報技術検定1級</p>
                <p>AI-900 / DP-900</p>
                <p>第2種電気工事士</p>
                <p>漢字検定2級</p>
            </div>
        </div>
        </>
    );
};

export default Skil;