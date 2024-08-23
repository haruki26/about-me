import { FC } from "react";
import PageFrame from "./PageFrame";
import FirstView from "./headerComponents/FirstView";
import Thumbnails from "./mainComponents/Thumbnails";

const Home: FC = () => {
    return (
        <PageFrame content="Home">
            <FirstView />
            <Thumbnails />
        </PageFrame>
    );
}

export default Home;