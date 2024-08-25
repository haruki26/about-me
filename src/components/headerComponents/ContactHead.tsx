import { FC } from "react";
import HeaderFrame from "./HeaderFrame";

const ContactHead: FC = () => {
    return (
        <HeaderFrame>
            <h1 className="font-zenKurenaido font-semibold text-5xl md:text-7xl">Contact</h1>
            <span className="font-kosugiMaru text-center text-2xl md:text-4xl">お問い合わせはこちらから</span>
        </HeaderFrame>
    );
};

export default ContactHead;