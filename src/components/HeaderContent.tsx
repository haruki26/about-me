import FirstView from "./headerComponents/FirstView";
import ContentsMenu from "./headerComponents/ContentsMenu";
import LinkIcons from "./headerComponents/LinkIcons";

const HeaderContent = () => {
    return (
        <div className="bg-slate-200/50 flex rounded-md px-3 py-2">
            <div className="w-full flex flex-col">
                <FirstView />
                <ContentsMenu />
                <LinkIcons />
            </div>
        
        </div>
    );
};

export default HeaderContent;