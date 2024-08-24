import { FC } from "react";

const FirstView: FC = () => {
    return (
        <div className="w-full p-5 h-screen flex flex-col">
            <div className="m-auto max-w-lg font-zenKurenaido font-extrabold text-slate-700 md:max-w-screen-md md:w-full">
                <div className="flex flex-col gap-10 justify-center">
                    <h1 className="text-7xl text-left md:text-9xl">Welcome!</h1>
                    <p className="text-4xl px-2 md:text-6xl">Thank you for visiting my website</p>
                </div>
            </div>
        </div>
    );
};

export default FirstView;