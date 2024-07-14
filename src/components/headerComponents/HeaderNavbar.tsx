import { GiHamburgerMenu } from "react-icons/gi";
import LinkIcons from "../LinkIcons";
import { FC, useEffect, useState } from "react";
import { Contents } from "../../types/Contents";
import { RxCross2 } from "react-icons/rx";
import useWindowSize from "../../hooks/useWindowSize";

type Props = {
    drawerState: boolean;
    contentState: Contents;
};

const HeaderNavbar: FC<Props> = ({drawerState, contentState}: Props) => {
    const [isContent, setIsContent] = useState<Contents>(contentState);
    const [checked, setChecked] = useState<boolean>(!drawerState);
    const [width]: number[] = useWindowSize();
    const [iconSize, setIconSize] = useState<string>("2.5rem");

    useEffect(() => {
        setIsContent(contentState);
    }, [contentState]);

    useEffect(() => {
        if (width < 768) {
            setIconSize("2.5rem");
        } else {
            setIconSize("3.5rem");
        }
    }, [width]);

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
                        <RxCross2 size={iconSize} className="swap-on" />
                        <GiHamburgerMenu size={iconSize} className="swap-off" />
                    </label>
                    <h2 className="text-4xl text-slate-700 font-zenKurenaido font-bold md:text-6xl">{isContent}</h2>
                </div>
                <div className="flex mx-2 gap-2 md:gap-5">
                    <LinkIcons size={iconSize} />
                </div>
            </div>
        </div>
    );
};

export default HeaderNavbar;