import { FC, useContext } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";

import kaigan from "../../../assets/images/kaigan.jpg";
import dazaihu from "../../../assets/images/dazaihu.jpg";
import kibune from "../../../assets/images/kibune.jpg";
import kibune2 from "../../../assets/images/kibune2.jpg";
import kosumosu from "../../../assets/images/kosumosu.jpg";
import higanbana from "../../../assets/images/higanbana.jpg";
import IconTitle from "../../IconTitle";
import useIconSize from "../../../hooks/useIconSize";
import { ModalContext } from "../../Root";


const FavoritePhoto: FC = () => {
    const {openModal} = useContext(ModalContext)

    const images = [
        kaigan, dazaihu, kibune, kibune2, kosumosu, higanbana
    ];

    const isIconSize = useIconSize(
        {
            iconSize: 2,
            breakPoint: "md",
            largeIconSize: 2.5
        }
    )

    return (
        <div className="w-full flex flex-col items-center gap-5">
            <IconTitle gap={2}>
                <MdOutlineCameraAlt size={isIconSize} />
                <h2 className="font-kosugiMaru text-2xl md:text-3xl">Photo</h2>
            </IconTitle>
            <div className="w-full max-w-2xl px-3 grid grid-cols-2 grid-flow-row gap-2 md:max-w-3xl md:grid-cols-3">
                {images.map((image, index) => (
                    <div
                    key={`photo-${index}`}
                    className="w-full"
                    onClick={() => openModal(images, index)}>
                        <img src={image} alt="photo" className="aspect-square object-cover rounded-lg" />
                    </div> 
                ))}
            </div>
        </div>
    );
}

export default FavoritePhoto;