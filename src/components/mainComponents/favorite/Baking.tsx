import { FC, useState } from "react";
import { LuCakeSlice } from "react-icons/lu";

import bushdenoel from "../../../assets/images/bushbenoel.jpg"
import cake from "../../../assets/images/cake.jpg"
import cheesecake from "../../../assets/images/cheesecake.jpg"
import tart from "../../../assets/images/tart.jpg"
import useModalControl from "../../../hooks/useModalContorol";
import Modal from "./Modal";
import useWindowSize from "../../../hooks/useWindowSize";

const Baking: FC = () => {
    const {isVisivleModal, clickImage, modalRef, openModal, closeModal} = useModalControl();
    const [width] = useWindowSize();

    const [isImage, setIsImage] = useState<string>("");

    const handleModal = (image: string) => {
        if (width > 768) {
            setIsImage(image);
            openModal(0);
        }
    }

    return (
        <div className="px-5 flex flex-col items-center gap-3">
            <div className="flex gap-2">
                <LuCakeSlice className="my-auto" size={"2rem"} />
                <h2 className="font-kosugiMaru text-2xl md:text-3xl">Baking</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 w-full max-w-md">
                <div className="w-full flex flex-col justify-center">
                    <img
                    src={bushdenoel}
                    alt="bushdenoel"
                    className="h-60 object-cover rounded-lg"
                    onClick={() => handleModal(bushdenoel)} />
                    <h3 className="text-center font-kosugiMaru text-2xl">ブッシュドノエル</h3>
                    <p className="text-center font-kosugiMaru text-xl">何を血迷ったのかきのこの山をさしました</p>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <img
                    src={cake}
                    alt="cake"
                    className="h-60 object-cover rounded-lg"
                    onClick={() => handleModal(cake)} />
                    <h3 className="text-center font-kosugiMaru text-2xl">ケーキ</h3>
                    <p className="text-center font-kosugiMaru text-xl">盛り付けのセンスが無いので果物はのせれるだけのせるタイプです</p>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <img
                    src={cheesecake}
                    alt="cheesecake"
                    className="h-60 object-cover rounded-lg"
                    onClick={() => handleModal(cheesecake)} />
                    <h3 className="text-center font-kosugiMaru text-2xl">レアチーズケーキ</h3>
                    <p className="text-center font-kosugiMaru text-xl">上の層はイチゴジャムのソースです</p>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <img
                    src={tart}
                    alt="tart"
                    className="h-60 object-cover rounded-lg"
                    onClick={() => handleModal(tart)} />
                    <h3 className="text-center font-kosugiMaru text-2xl">タルト</h3>
                    <p className="text-center font-kosugiMaru text-xl">綺麗に盛り付けができた気がしています</p>
                </div>
            </div>
            {isVisivleModal && (
                <div ref={modalRef}>
                    <Modal images={[isImage]} clickImage={clickImage} closeModalAct={closeModal} />
                </div>
            )}
        </div>
    );
};

export default Baking;