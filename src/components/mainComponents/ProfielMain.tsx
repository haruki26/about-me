import { FC } from "react";
import AboutMe from "./profiel/AboutMe";
import Skil from "./profiel/Skill";

const ProfielMain: FC = () => {
    return (
        <div className="p-1 max-w-3xl flex flex-col gap-5 mx-auto">
            <AboutMe />
            <Skil />
        </div>
    );
};

export default ProfielMain;