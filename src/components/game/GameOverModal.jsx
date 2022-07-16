import { toBlob } from 'html-to-image';
import { useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import statBG from "../../assets/images/stat-bg.png";
import useStore from "../../store";

function GameOverModal() {
    let navigate = useNavigate()
    const state = useStore((state) => state)
    const imageRef = useRef(null);

    const goNextLevel = () => {
        navigate(0)
    }

    const handleShare = async () => {
        const newFile = await toBlob(imageRef.current);
        const data = {
            files: [
                new File([newFile], 'image.png', {
                    type: newFile.type,
                }),
            ],
            title: 'Play Object Finder Game',
            text: 'Play Object Finder Game',
            url: 'https://play-object-finder.com'
        };

        try {
            if (!navigator.canShare(data)) {
                alert("Your browser doesn't support share");
            }
            await navigator.share(data);
        } catch (err) {
            console.error(err);
            alert("Your browser doesn't support share");
        }
    }



    useEffect(() => {
        if (state.targetItems[`level${state.level}`].length == 0) {
            state.setGameOver(true)
            if (state.level != state.maxLevel) {
                state.addLevel()
                localStorage.setItem("gameLevel", parseInt(state.level) + 1)
            }
        }
    }, [state.targetItems]);

    return (
        <div id="popup-modal" className={`absolute inset-0 ${state.gameOver == true ? "slide-in-top" : state.gameOver == false ? "-top-[100%]" : "hidden"} font-bubblegum overflow-y-auto overflow-x-hidden z-50 h-modal h-full justify-center items-center flex bg-blend-overlay bg-gray-400/80 transition-all duration-500`} aria-modal="true" role="dialog">
            <div className="relative p-4 w-1/2 max-w-md h-full md:h-auto" ref={imageRef}>
                <div className="relative rounded-lg shadow bg-contain bg-no-repeat px-12 pt-4" style={{ backgroundImage: `url(${statBG})` }}>
                    <div className="py-12 pl-4 text-center mt-4 flex flex-col justify-between">
                        <h1 className="text-gray-100 text-4xl mb-2">Game {state.score == 6 ? "Won" : "Over"}!</h1>
                        <h1 className="text-gray-100 text-2xl mb-2">Your Score: {state.score}</h1>
                        <h1 className="text-gray-100 text-2xl">Total Time: {state.time[0]}:{state.time[1]}</h1>
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button type="button" className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-4 py-2 mb-2 text-xl">
                                <Link to="/">Menu</Link>
                            </button>
                            {
                                (state.score < 6) ? (<button type="button" onClick={goNextLevel} className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-4 py-2 mb-2 text-xl">
                                    Restart
                                </button>) : null
                            }
                            {
                                (state.level != state.maxLevel & state.score == 6) ? (<button type="button" onClick={goNextLevel} className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-4 py-2 mb-2 text-xl">
                                    Next Level
                                </button>) : null
                            }
                            {
                                state.score == 6 ? <button type="button" onClick={handleShare} className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-4 py-2 mb-2 text-xl">Share</button> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default GameOverModal;