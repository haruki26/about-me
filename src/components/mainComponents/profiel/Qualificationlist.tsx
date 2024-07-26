import { FC } from "react";
import { TiPencil } from "react-icons/ti";

const Qualificationlist: FC = () => {
    return (
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
    );
};

export default Qualificationlist;