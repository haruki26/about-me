import FirstView from "./headerComponents/FirstView";
import ContentsMenu from "./headerComponents/ContentsMenu";
import LinkIcons from "./headerComponents/LinkIcons";

const HeaderContent = () => {
    return (
        <div className="w-full flex flex-col ">
            <div className="px-2 py-2">
                <FirstView />
            </div>
            <div className="mx-auto my-3">
                <ContentsMenu />
            </div>
            <div className="w-full flex justify-end gap-3">
                <LinkIcons />
            </div>
        </div>
    );
};

export default HeaderContent;