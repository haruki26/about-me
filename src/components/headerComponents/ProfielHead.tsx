import icon from "../../assets/images/icon.jpg"

const ProfielHead = () => {
    return (
        <div className="mx-2 my-1 flex flex-col items-center">
            <div className="py-3 animate-fade-in-bottom">
                <img src={icon} alt="Profiel" className="rounded-xl object-cover w-80 h-80 object-bottom " />
            </div>
            <div className="py-3 animate-fade-in-bottom chat chat-start gap-2">
                <div className="chat-bubble font-kosugiMaru text-left text-2xl mx-1">
                    <p>久保陽生といいます</p>
                    <p>MBTIはISTPです</p>
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