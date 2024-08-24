import { FC } from "react";
import ContentsMenu from "./ContentsMenu";
import ThemeChangeBtn from "./footerComponents/ThemeChangeBtn";
import TopBackBtn from "./footerComponents/TopBackBtn";

const FooterContent: FC = () => {
    return (
        <div className="w-full bg-slate-800 px-3 py-2">
            <div className="flex justify-center gap-1 lg:py-5">
                <div>
                    <ContentsMenu menuSize="xs" textSize="text-xl" iconSize="1.75rem" />
                </div>
                <div className="flex flex-col px-9 my-auto gap-5 lg:flex-row lg:items-center lg:gap-10">
                    <TopBackBtn />
                    <ThemeChangeBtn />
                </div>
            </div>
            <div className="w-full text-center py-1">
                <small>&copy; 2024 Haruki</small>
            </div>
        </div>
    );
}

export default FooterContent;