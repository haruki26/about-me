import { TiArrowUpOutline } from "react-icons/ti";

const TopBackBtn = () => {
    return (
        <>
            <label className="flex flex-col items-center">
                <button className="hover:bg-slate-700">
                    <TiArrowUpOutline size={"2.5rem"}/></button>
                <span className="font-zenKurenaido font-semibold">Page Top</span>
            </label>
        </>
    );
}

export default TopBackBtn