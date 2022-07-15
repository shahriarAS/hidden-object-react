import statBG from "../../assets/images/stat-bg.png";
import useStore from "../../store";

function GameStat() {
    const state = useStore((state) => state)

    return (
        <>
            <div className="control-btn bg-contain bg-no-repeat w-24 h-24 pt-4 flex flex-col items-center text-center text-white font-bubblegum text-xl" style={{ backgroundImage: `url(${statBG})` }}>
                <p>Score:</p>
                <p>{state.score}</p>
            </div>
            <div className="control-btn bg-contain bg-no-repeat w-24 h-24 pt-4 flex flex-col items-center text-center text-white font-bubblegum text-xl" style={{ backgroundImage: `url(${statBG})` }}>
                <p>Time:</p>
                <p>3:21</p>
            </div>
            <div className="control-btn bg-contain bg-no-repeat w-24 h-24 pt-4 flex flex-col items-center text-center text-white font-bubblegum text-xl" style={{ backgroundImage: `url(${statBG})` }}>
                <p>Level:</p>
                <p>{state.level}/10</p>
            </div>
        </>
    );
}

export default GameStat;