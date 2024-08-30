import { FC } from "react";
import { TiArrowUpOutline } from "react-icons/ti";

const TopBackBtn: FC = () => {
    const returnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <label className="flex flex-col items-center text-slate-400">
            <button onClick={returnTop}>
                <TiArrowUpOutline size={"2.5rem"}/>
            </button>
            <span className="font-zenKurenaido font-semibold">Page Top</span>
        </label>
    );
}

export default TopBackBtn