import { FC } from "react";
import { GiGears } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { RiHome3Line, RiInformation2Line, RiMailSendFill } from "react-icons/ri";

const ContentsMenu: FC = () => {
    return (
        <ul className="menu menu-vertical menu-xs lg:menu-horizontal font-zenKurenaido font-semibold text-slate-400">
            <li>
                <label className="mx-auto">
                    <a href="#" />
                    <RiHome3Line size={"1.75rem"} />
                    <span  className="text-xl">Home</span>
                </label>
            </li>
            <li>
                <label className="mx-auto">
                    <a href="#" />
                    <RiInformation2Line size={"1.75rem"} />
                    <span  className="text-xl">Profiel</span>
                </label>
            </li>
            <li>
                <label className="mx-auto">
                    <a href="#" />
                    <MdFavoriteBorder size={"1.75rem"} />
                    <span  className="text-xl">Favorite</span>
                </label>
            </li>
            <li>
                <label className="mx-auto">
                    <a href="#" />
                    <GiGears size={"1.75rem"} />
                    <span className="text-xl">Create</span>
                </label>
            </li>
            <li>
                <label className="mx-auto">
                    <a href="#" />
                    <RiMailSendFill size={"1.75rem"} />
                    <span className="text-xl">Contact</span>
                </label>
            </li>
        </ul>
    );
};

export default ContentsMenu;