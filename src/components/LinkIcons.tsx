import { FaGithub, FaInstagram } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

const LinkIcons = () => {
    return (
        <>
            <a href="https://github.com/haruki26" className="tooltip mytooltipcolor" data-tip="Github">
                <FaGithub size={"2rem"} color="black"/>
            </a>
            <a href="https://www.instagram.com/yousei_81" className="tooltip mytooltipcolor" data-tip="Instagram">
                <FaInstagram size={"2rem"} color="black"/>
            </a>
            <a href="#" className="tooltip mytooltipcolor" data-tip="Contact">
                <RiMailSendFill size={"2rem"} color="black"/>
            </a>
        </>
    );
};

export default LinkIcons;