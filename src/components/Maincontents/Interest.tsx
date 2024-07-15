import { FC } from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const Interest: FC = () => {
    return (
        <>
        <div className="flex flex-col">
            <div className="p-2 flex gap-2">
                <AiOutlineDeploymentUnit size={"3.5rem"} />
                <h2 className="font-zenKurenaido font-semibold text-5xl">Interest</h2>
            </div>
            
        </div>
        </>
    );
}

export default Interest;