import { ChangeEvent, FC, FormEvent, useState } from "react";

const Contact: FC = () => {
    const [isName, setIsName] = useState<string>("");
    const [isEmail, setIsEmail] = useState<string>("");
    const [isMessage, setIsMessage] = useState<string>("");
    const [isUrlMessage, setIsUrlMessage] = useState<string>("please_fill_in_the_form");
    const [isUrlColor, setIsUrlColor] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (isName && isEmail && isMessage) {
            setIsUrlMessage("success.thank_you_for_contacting_me");
            setIsUrlColor("text-cyan-400");

            setIsName("");
            setIsEmail("");
            setIsMessage("");
        } else {
            let formatUrl: string = ""

            !isName ? formatUrl += "name" : formatUrl += "";
            !isEmail ? formatUrl += (formatUrl && "&") + "email" : formatUrl += "";
            !isMessage ? formatUrl += (formatUrl && "&") + "message" : formatUrl += "";

            setIsUrlMessage(`failed.please_fill_in_${formatUrl}`);
            setIsUrlColor("text-red-500");
        }
    };

    return (
        <>
        <div className="max-w-screen-sm mx-auto">
            <div className="mx-3 mockup-browser bg-slate-900 border">
                <div className="mockup-browser-toolbar">
                    <div className={`input ${isUrlColor}`}>{isUrlMessage}</div>
                </div>
                <div className="bg-slate-800">
                    <form className="flex flex-col gap-4 p-3 font-kosugiMaru" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label>お名前</label>
                            <input
                            type="text"
                            value={isName}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setIsName(e.target.value)}
                            placeholder="山田太郎"
                            className="p-1 border" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>メールアドレス</label>
                            <input
                            type="email"
                            value={isEmail}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setIsEmail(e.target.value)}
                            placeholder="email@example.com"
                            className="p-1 border" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>お問い合わせ内容</label>
                            <textarea
                            value={isMessage}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setIsMessage(e.target.value)}
                            placeholder="花冠作成の依頼"
                            className="p-1 border" />
                        </div>
                        <button type="submit" className="p-1 bg-blue-400 text-white">送信</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;