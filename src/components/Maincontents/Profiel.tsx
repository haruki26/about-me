import Skil from "./Skils";
import Interest from "./Interest";
import { FC } from "react";

const Profiel: FC = () => {
    return (
        <div className="p-1 flex flex-col gap-5">
            <Skil />
            <Interest />
        </div>
    );
};

export default Profiel;