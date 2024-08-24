import { FC } from "react";

import PageFrame from "./PageFrame";
import FavoriteHead from "./headerComponents/FavoriteHead";
import FavoriteMain from "./mainComponents/FavoriteMain";

const Favorite: FC = () => {
    return (
        <PageFrame>
            <FavoriteHead />
            <FavoriteMain />
        </PageFrame>
    );
};

export default Favorite;