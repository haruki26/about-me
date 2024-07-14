import { FC } from "react";
import icon from "../../assets/images/icon.jpg"


const ProfielHead: FC = () => {
    return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:gap-3 md:px-10">
            <div className="py-3 mx-auto animate-fade-in-bottom w-80 h-80 md:ml-16">
                <img src={icon} alt="Profiel" className="rounded-xl object-cover object-bottom w-full h-full" />
            </div>
            <div className="py-3 animate-fade-in-bottom chat chat-start gap-2 md:flex md:flex-col md:justify-center">
                <div className="chat-bubble font-kosugiMaru text-left text-2xl mx-1">
                    <p>久保陽生といいます</p>
                    <p>専門学生です</p>
                </div>
                <div className="chat-bubble font-kosugiMaru text-left text-2xl mx-1">
                    <p>綺麗な景色や写真を撮ること、お菓子作りが好きです</p>
                </div>
            </div>
        </div>
    );
};

export default ProfielHead;