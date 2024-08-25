import { FC } from "react";
import { GiGears } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { RiHome3Line, RiInformation2Line, RiMailSendFill } from "react-icons/ri";
import IconTitle from "./IconTitle";
import { Link } from "@tanstack/react-router";

type menuSize = "xs" | "sm" | "md" | "lg" | "xl";

type Props = {
    menuSize: menuSize;
    textSize: string;
    iconSize: string;
    className?: string;
    transHorizon?: boolean;
}

const ContentsMenu: FC<Props> = ({
    menuSize,
    textSize,
    iconSize,
    className = "",
    transHorizon = true
}) => {
    return (
        <div className="font-zenKurenaido font-semibold text-slate-400">
            <ul className={`menu menu-vertical menu-${menuSize} ${className} ${transHorizon && "lg:menu-horizontal"}`}>
                <li>
                    <label className="mx-auto">
                        <Link to="/">
                            <IconTitle>
                                <RiHome3Line size={iconSize} />
                                <span  className={textSize}>Home</span>
                            </IconTitle>
                        </Link>
                    </label>
                </li>
                <li>
                    <label className="mx-auto">
                        <Link to="/profiel">
                            <IconTitle>
                                <RiInformation2Line size={iconSize} />
                                <span  className={textSize}>Profiel</span>
                            </IconTitle>
                        </Link>
                    </label>
                </li>
                <li>
                    <label className="mx-auto">
                        <Link to="/favorite">
                            <IconTitle>
                                <MdFavoriteBorder size={iconSize} />
                                <span  className={textSize}>Favorite</span>
                            </IconTitle>
                        </Link>
                    </label>
                </li>
                <li>
                    <label className="mx-auto">
                        <Link to="/contact">
                            <IconTitle>
                                <RiMailSendFill size={iconSize} />
                                <span  className={textSize}>Contact</span>
                            </IconTitle>
                        </Link>
                    </label>
                </li>
                <li>
                    <label className="mx-auto">
                        <Link to="/create">
                            <IconTitle>
                                <GiGears size={iconSize} />
                                <span  className={textSize}>Create</span>
                            </IconTitle>
                        </Link>
                    </label>
                </li>
            </ul>
        </div>
        
    );
};

export default ContentsMenu;