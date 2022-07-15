import { useEffect } from "react";
import statBG from "../../assets/images/stat-bg.png";
import useStore from "../../store";

function GameOverModal() {
    const state = useStore((state) => state)

    const gameContinue = () => {
        state.setGameOver(false)
    }

    useEffect(() => {
        state.targetItems[`level${state.level}`].length == 0 ? state.setGameOver(true) : null
    }, [state.targetItems]);

    return (
        <div id="popup-modal" class={`${state.gameOver ? null : "hidden"} font-bubblegum overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex bg-blend-overlay bg-gray-400/80`} aria-modal="true" role="dialog">
            <div class="relative p-4 w-1/2 max-w-md h-full md:h-auto">
                <div class="relative rounded-lg shadow bg-contain bg-no-repeat px-12 pt-4" style={{ backgroundImage: `url(${statBG})` }}>
                    <div class="p-12 pl-8 text-center mt-4 flex flex-col justify-between">
                        <h1 className="text-gray-100 text-4xl mb-2">Game {state.score == 6 ? "Won" : "Over"}!</h1>
                        <h1 className="text-gray-100 text-2xl mb-2">Your Score: {state.score}</h1>
                        <h1 className="text-gray-100 text-2xl">Total Time: {state.time[0]}:{state.time[1]}</h1>
                        <div className="flex gap-4 mt-8">
                            <button type="button" class="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-8 py-2.5 mr-2 mb-2 text-xl">Menu</button>
                            <button type="button" class="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-8 py-2.5 mr-2 mb-2 text-xl" onClick={gameContinue}>Restart</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameOverModal;