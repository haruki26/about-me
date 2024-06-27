import { GiHamburgerMenu } from "react-icons/gi";
import LinkIcons from "./LinkIcons";

const HeaderNavbar = () => {
    return (
        <div className="navbar flex justify-between">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <GiHamburgerMenu size={"2.5rem"} />
                </button>
            </div>
            <div className="flex gap-1">
                <LinkIcons />
            </div>
        </div>
    );
};

export default HeaderNavbar;