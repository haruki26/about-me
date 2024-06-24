import { GiGears } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { RiHome3Line, RiInformation2Line, RiMailSendFill } from "react-icons/ri";

const ContentsMenu = () => {
    return (
        <div className="mx-auto my-3">
            <ul className="menu menu-vertical menu-lg lg:menu-horizontal font-zenKurenaido font-semibold text-slate-700">
                <li>
                    <label className="mx-auto gap-3">
                        <a href="#" />
                        <RiHome3Line size={"3.5rem"} />
                        <span  className="text-3xl">HOME</span>
                    </label>
                </li>
                <li>
                    <label className="mx-auto gap-3">
                        <a href="#" />
                        <RiInformation2Line size={"3.5rem"} />
                        <span  className="text-3xl">Profiel</span>
                    </label>
                </li>
                <li>
                    <label className="mx-auto gap-3">
                        <a href="#" />
                        <MdFavoriteBorder size={"3.5rem"} />
                        <span  className="text-3xl">Favorite</span>
                    </label>
                </li>
                <li>
                    <label className="mx-auto gap-3">
                        <a href="#" />
                        <GiGears size={"3.5rem"} />
                        <span className="text-3xl">Create</span>
                    </label>
                </li>
                <li>
                    <label className="mx-auto gap-3">
                        <a href="#" />
                        <RiMailSendFill size={"3.5rem"} />
                        <span className="text-3xl">Contact</span>
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default ContentsMenu;