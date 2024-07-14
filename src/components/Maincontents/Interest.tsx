import { FC } from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const Interest: FC = () => {
    return (
        <>
        <div className="max-w-screen-md flex flex-col md:mx-auto">
            <div className="p-2 flex gap-2">
                <AiOutlineDeploymentUnit size={"3.5rem"} />
                <h2 className="font-zenKurenaido font-semibold text-5xl">Interest</h2>
            </div>
            <div className="px-5 py-2 flex flex-col gap-8 md:mt-5 md:gap-20">
                <div className="mx-auto flex flex-col justify-center gap-2">
                    <div className="font-kosugiMaru text-xl flex flex-col gap-1.5">
                        <h3 className="text-3xl text-left my-3 md:text-center md:text-4xl">綺麗な景色を見ること</h3>
                        
                    </div>
                    <div className="font-kosugiMaru text-xl flex flex-col gap-1.5">
                        <h3 className="text-3xl text-left my-3 md:text-center md:text-4xl">資格・検定</h3>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Interest;