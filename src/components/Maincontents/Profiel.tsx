import { FC } from "react";
import AboutMe from "./profiel/AboutMe";
import Skil from "./profiel/Skil";

const Profiel: FC = () => {
    return (
        <div className="p-1 max-w-screen-md flex flex-col gap-5 mx-auto">
            <AboutMe />
            <Skil />
        </div>
    );
};

export default Profiel;