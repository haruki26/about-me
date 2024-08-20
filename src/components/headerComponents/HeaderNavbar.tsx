import { GiHamburgerMenu } from "react-icons/gi";
import LinkIcons from "../LinkIcons";
import { FC, useEffect, useState } from "react";
import { Contents } from "../../types/Contents";
import { RxCross2 } from "react-icons/rx";
import useIconSize from "../../hooks/useIconSize";

type Props = {
    drawerState: boolean;
    contentState: Contents;
};

const HeaderNavbar: FC<Props> = ({drawerState, contentState}) => {
    const [isContent, setIsContent] = useState<Contents>(contentState);
    const [checked, setChecked] = useState<boolean>(!drawerState);
    const isIconSize = useIconSize(
        {
            iconSize: 2.5,
            breakPoint: "md",
            largeIconSize: 3.5
        }
    );

    useEffect(() => {
        setIsContent(contentState);
    }, [contentState]);

    const handleChecked = () => {
        setChecked(drawerState);
    }

    useEffect(() => {
        handleChecked();
    }, [drawerState]);

    return (
        <div className="w-full bg-slate-200/50 p-2 md:p-5">
            <div className="navbar flex justify-between">
                <div className="flex gap-4">
                    <label 
                    htmlFor="drawer-menu" 
                    aria-label="open sideber" 
                    className={`swap swap-rotate btn btn-square btn-ghost text-slate-900 ${checked ? "swap-active" : ""}`}>
                        <input type="checkbox" checked={checked} readOnly />
                        <RxCross2 size={isIconSize} className="swap-on" />
                        <GiHamburgerMenu size={isIconSize} className="swap-off" />
                    </label>
                    <h2 className="text-4xl text-slate-700 font-zenKurenaido font-bold md:text-6xl">{isContent}</h2>
                </div>
                <div className="flex mx-2 gap-2 md:gap-5">
                    <LinkIcons size={isIconSize} />
                </div>
            </div>
        </div>
    );
};

export default HeaderNavbar;