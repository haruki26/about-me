import { FC } from "react";
import PageFrame from "./PageFrame";
import ProfielHead from "./headerComponents/ProfielHead";
import ProfielMain from "./mainComponents/ProfielMain";

const Profiel: FC = () => {
    return (
        <PageFrame content="Profiel">
            <ProfielHead />
            <ProfielMain />
        </PageFrame>
    );
};

export default Profiel;