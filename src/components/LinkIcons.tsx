import { Link } from "@tanstack/react-router";
import { FC } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

type Props = {
    size?: string;
    color?: string;
};

const LinkIcons: FC<Props> = ({size, color}) => {
    const iconSize =  size ? size : "2rem";
    const iconColor = color ? color : "black";

    return (
        <>
        <a
        href="https://github.com/haruki26"
        className="tooltip tooltip-bottom mytooltipcolor"
        data-tip="Github">
            <FaGithub size={iconSize} color={iconColor} />
        </a>
        <a
        href="https://www.instagram.com/yousei_81"
        className="tooltip tooltip-bottom mytooltipcolor"
        data-tip="Instagram">
            <FaInstagram size={iconSize} color={iconColor} />
        </a>
        <Link
        to="/contact"
        className="tooltip tooltip-bottom mytooltipcolor"
        data-tip="Contact">
            <RiMailSendFill size={iconSize} color={iconColor} />
        </Link>
        </>
    );
};

export default LinkIcons;