import { FC } from "react";

const ContactHead: FC = () => {
    return (
        <div className="w-full min-h-96 px-5 flex flex-col gap-10 items-center justify-center">
            <h1 className="font-zenKurenaido font-semibold text-5xl md:text-7xl">Contact</h1>
            <span className="font-kosugiMaru text-center text-2xl md:text-4xl">お問い合わせはこちらから</span>
        </div>
    );
};

export default ContactHead;