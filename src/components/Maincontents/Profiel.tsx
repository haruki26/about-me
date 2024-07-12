import { AiOutlineDeploymentUnit } from "react-icons/ai";
import Skil from "./Skils";

const Profiel = () => {
    return (
        <div className="p-1">
            <Skil />
            <div className="p-2 flex gap-2">
                <AiOutlineDeploymentUnit size={"3.5rem"} />
                <h2 className="font-zenKurenaido font-semibold text-5xl">Hobby</h2>
            </div>
            <div className="p-2">
                <p className="text-center">綺麗な景色や写真を撮ることが好きです</p>
            </div>
        </div>
    );
};

export default Profiel;