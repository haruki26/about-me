import { FC } from "react";
import FirstView from "./headerComponents/FirstView";

const HeaderContent: FC = () => {
    return (
        <>
        <div className="px-3 py-2">
            <div className="w-full flex flex-col items-center">
                <div className="max-w-screen-lg px-2 py-2 md:min-w-[784]">
                    <FirstView />
                </div>
            </div>
        </div>
        </>
    );
};

export default HeaderContent;