import { FC, useContext } from "react";
import { MdOutlineFoodBank } from "react-icons/md";

import { ModalContext } from "../../Root";

import ramen from "../../../assets/images/ramen.jpg";
import jirou from "../../../assets/images/jirou.jpg";
import curry from "../../../assets/images/curry.jpg";
import tantanmen from "../../../assets/images/tantanmen.jpg";
import zenzai from "../../../assets/images/zenzai.jpg";
import eggtart from "../../../assets/images/eggtart.jpg";
import ImageContents from "./ImageContents";
import IconTitle from "../../IconTitle";
import useIconSize from "../../../hooks/useIconSize";

const Food: FC = () => {
    const sectionImgs = [
        [ramen, jirou],
        [curry, tantanmen],
        [zenzai, eggtart]
    ]

    const {openModal} = useContext(ModalContext);
    
    const isIconSize = useIconSize({
        iconSize: 2,
        breakPoint: "md",
        largeIconSize: 2.5
    });

    return (
        <div className="flex flex-col px-3 items-center gap-5">
            <IconTitle gap={2} >
                <MdOutlineFoodBank size={isIconSize} />
                <h2 className="font-kosugiMaru text-2xl md:text-3xl">Food</h2>
            </IconTitle>
            <ImageContents className="max-w-md md:max-w-3xl">
                <div className="grid grid-cols-2 gap-2">
                    {sectionImgs[0].map((img, index) => (
                        <img
                        src={img}
                        alt="ramen"
                        className="aspect-square object-cover rounded-lg"
                        key={`ramen-${index}`}
                        onClick={() => openModal(sectionImgs[0], index)} />
                    ))}
                </div>
                <div className="font-kosugiMaru text-xl md:text-2xl">
                    <p>ラーメンが好きです</p>
                    <p>初二郎は油少なめ他全マシでした</p>
                </div>
            </ImageContents>
            <ImageContents className="max-w-md md:max-w-3xl">
                <div className="grid grid-cols-2 gap-2">
                    {sectionImgs[1].map((img, index) => (
                        <img
                        src={img}
                        alt="curry"
                        className="aspect-square object-cover rounded-lg"
                        key={`curry-${index}`}
                        onClick={() => openModal(sectionImgs[1], index)} />
                    ))}
                </div>
                <div className="font-kosugiMaru text-xl md:text-2xl">
                    <p>辛いもの好きです</p>
                    <p>ねぎしか見えない担々麵は食べた後舌の感覚なくなりました</p>
                </div>
            </ImageContents>
            <ImageContents className="max-w-md md:max-w-3xl">
                <div className="grid grid-cols-2 gap-2">
                    {sectionImgs[2].map((img, index) => (
                        <img
                        src={img}
                        alt="zenzai"
                        className="aspect-square object-cover rounded-lg"
                        key={`zenzai-${index}`}
                        onClick={() => openModal(sectionImgs[2], index)} />
                    ))}
                </div>
                <div className="font-kosugiMaru text-xl md:text-2xl">
                    <p>甘いものも好きです</p>
                    <p>アンドリューのエッグタルトは是非食べてみてほしいです</p>
                </div>
            </ImageContents>
        </div>
    )
}

export default Food;