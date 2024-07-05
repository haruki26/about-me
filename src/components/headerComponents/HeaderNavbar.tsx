import { GiHamburgerMenu } from "react-icons/gi";
import LinkIcons from "../LinkIcons";

const HeaderNavbar = () => {
    return (
        <div className="w-screen bg-slate-200/50">
            <div className="navbar flex justify-between">
                <div className="flex gap-2">
                    <LinkIcons />
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost text-slate-900">
                        <GiHamburgerMenu size={"2.5rem"} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderNavbar;