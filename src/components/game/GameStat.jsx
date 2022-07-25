import statBG from "../../assets/images/stat-bg.png";
import useStore from "../../store";
import GameTimer from "./GameTimer";

function GameStat() {
    const state = useStore((state) => state)

    return (
        <>
            <div className="relative control-btn bg-cover bg-center bg-no-repeat w-32 h-28 flex flex-col items-center justify-center text-center text-white font-bubblegum text-lg">
                <img src={statBG} alt="" className="aboslute inset-0 w-full h-full" />
                <div className="absolute ">
                    <p>Your Score:</p>
                    <p>{state.score}</p>
                </div>
            </div>
            {
                state?.gameMode == "multiplayer" ? (
                    <div className="relative control-btn bg-cover bg-center bg-no-repeat w-32 h-28 flex flex-col items-center justify-center text-center text-white font-bubblegum text-lg">
                        <img src={statBG} alt="" className="aboslute inset-0 w-full h-full" />
                        <div className="absolute ">
                            <p className="flex flex-wrap px-4 pt-4">Opponent Score:</p>
                            <p>{state.score}</p>
                        </div>
                    </div>
                ) : null
            }
            <GameTimer />
            <div className="control-btn bg-contain bg-no-repeat w-24 h-24 pt-4 flex flex-col items-center text-center text-white font-bubblegum text-xl" style={{ backgroundImage: `url(${statBG})` }}>
                <p>Level:</p>
                <p>{state.level}/{state.maxLevel}</p>
            </div>
        </>
    );
}

export default GameStat;