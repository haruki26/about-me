import { FC } from "react";
import PageFrame from "./PageFrame";
import CreateHead from "./headerComponents/CreateHead";
import CreateMain from "./mainComponents/CreateMain";

const Create: FC = () => {
    return (
        <PageFrame>
            <CreateHead />
            <CreateMain />
        </PageFrame>
    );
}

export default Create;