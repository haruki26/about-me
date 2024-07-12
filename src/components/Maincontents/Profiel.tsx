import Skil from "./Skils";
import Interest from "./Interest";

const Profiel = () => {
    return (
        <div className="p-1 flex flex-col gap-5">
            <Skil />
            <Interest />
        </div>
    );
};

export default Profiel;