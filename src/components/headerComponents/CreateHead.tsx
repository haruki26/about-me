import { FC } from "react";
import HeaderFrame from "./HeaderFrame";

const CreateHead: FC = () => {
    return (
        <HeaderFrame>
            <h1 className="font-zenKurenaido font-semibold text-5xl md:text-7xl">Create</h1>
            <span className="font-kosugiMaru text-center text-2xl md:text-4xl">作ったものについて紹介します</span>
        </HeaderFrame>
    );
}

export default CreateHead;