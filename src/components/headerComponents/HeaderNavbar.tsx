import { GiHamburgerMenu } from "react-icons/gi";
import LinkIcons from "../LinkIcons";
import { useState } from "react";
import { Contents } from "../../types/Contents";
import { RxCross2 } from "react-icons/rx";

const HeaderNavbar = () => {
    const [isContent, setIsContent] = useState<Contents>("Home");

    const [checked, setChecked] = useState<boolean>(false);

    const handleChecked = () => {
        setChecked(!checked);
    }

    return (
        <div className="w-screen bg-slate-200/50 p-2">
            <div className="navbar flex justify-between">
                <div className="flex gap-4">
                    <label 
                    htmlFor="drawer-menu" 
                    aria-label="open sideber" 
                    className={`swap swap-rotate btn btn-square btn-ghost text-slate-900 ${checked ? "swap-active" : ""}`}
                    onClick={handleChecked}>
                        <input type="checkbox" checked={checked} onClick={handleChecked} />
                        <RxCross2 size={"2.5rem"} className="swap-on" />
                        <GiHamburgerMenu size={"2.5rem"} className="swap-off" />
                    </label>
                    <h2 className="text-4xl text-slate-700 font-zenKurenaido font-bold">{isContent}</h2>
                </div>
                <div className="flex gap-2 md:gap-3">
                    <LinkIcons />
                </div>
            </div>
        </div>
    );
};

export default HeaderNavbar;