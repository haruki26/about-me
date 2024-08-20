import { FC, useState } from "react";
import { LuCakeSlice } from "react-icons/lu";

import bushdenoel from "../../../assets/images/bushbenoel.jpg"
import cake from "../../../assets/images/cake.jpg"
import cheesecake from "../../../assets/images/cheesecake.jpg"
import tart from "../../../assets/images/tart.jpg"
import useModalControl from "../../../hooks/useModalContorol";
import Modal from "./Modal";
import useWindowSize from "../../../hooks/useWindowSize";
import useIconSize from "../../../hooks/useIconSize";
import IconTitle from "../../IconTitle";
import ImageContents from "./ImageContents";

const Baking: FC = () => {
    const {isVisivleModal, clickImage, modalRef, openModal, closeModal} = useModalControl();
    const [width] = useWindowSize();
    const isIconSize = useIconSize(
        {
            iconSize: 2,
            breakPoint: "md",
            largeIconSize: 2.5
        }
    )

    const [isImage, setIsImage] = useState<string>("");

    const handleModal = (image: string) => {
        if (width > 768) {
            setIsImage(image);
            openModal(0);
        }
    }

    return (
        <div className="px-5 flex flex-col items-center gap-5">
            <IconTitle gap={2}>
                <LuCakeSlice size={isIconSize} />
                <h2 className="font-kosugiMaru text-2xl md:text-3xl">Baking</h2>
            </IconTitle>
            <div className="grid grid-cols-1 gap-5 w-full max-w-md md:grid-cols-2 md:max-w-5xl ">
                <div className="w-full md:min-h-96">
                    <ImageContents className="mx-auto">
                        <img
                        src={bushdenoel}
                        alt="bushdenoel"
                        className="h-60 object-cover rounded-lg"
                        onClick={() => handleModal(bushdenoel)} />
                        <div className="font-kosugiMaru flex flex-col gap-2">
                            <h3 className="text-3xl">ブッシュドノエル</h3>
                            <p className="text-xl">何を血迷ったのかきのこの山をさしました</p>
                        </div>
                    </ImageContents>
                </div>
                <div className="w-full md:min-h-96">
                    <ImageContents className="mx-auto">
                        <img
                        src={cake}
                        alt="cake"
                        className="h-60 object-cover rounded-lg"
                        onClick={() => handleModal(cake)} />
                        <div className="font-kosugiMaru flex flex-col gap-2">
                            <h3 className="text-3xl">ケーキ</h3>
                            <p className="text-xl">盛り付けのセンスが無いので果物はのせれるだけのせるタイプです</p>
                        </div>
                    </ImageContents>
                </div>
                <div className="w-full md:min-h-96">
                    <ImageContents className="mx-auto">
                        <img
                        src={cheesecake}
                        alt="cheesecake"
                        className="h-60 object-cover rounded-lg"
                        onClick={() => handleModal(cheesecake)} />
                        <div className="font-kosugiMaru flex flex-col gap-2">
                            <h3 className="text-3xl">レアチーズケーキ</h3>
                            <p className="text-xl">上の層はイチゴジャムのソースです</p>
                        </div>
                    </ImageContents>
                </div>
                <div className="w-full md:min-h-96">
                    <ImageContents className="mx-auto">
                        <img
                        src={tart}
                        alt="tart"
                        className="h-60 object-cover rounded-lg"
                        onClick={() => handleModal(tart)} />
                        <div className="font-kosugiMaru flex flex-col gap-2">
                            <h3 className="text-3xl">タルト</h3>
                            <p className="text-xl">綺麗に盛り付けができた気がしています</p>
                        </div>
                    </ImageContents>
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