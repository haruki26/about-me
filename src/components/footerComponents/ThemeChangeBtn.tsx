import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

const ThemeChangeBtn = () => {
    return (
        <div className="flex flex-col gap-2 p-2">
            <label className="swap swap-rotate">
                <input type="checkbox" className="theme-controller" value="synthwave" />
                <LuSunMedium className="swap-on h-10 w-10 fill-current" />
                <FaRegMoon className="swap-off h-10 w-10 fill-current" />
            </label>
            <span className="mx-auto font-zenKurenaido font-semibold">Theme</span>
        </div>
    );
}

export default ThemeChangeBtn