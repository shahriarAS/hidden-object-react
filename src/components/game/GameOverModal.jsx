import { doc, increment, updateDoc } from "firebase/firestore";
import { toBlob } from 'html-to-image';
import { useEffect, useId, useRef } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import gameOverSound from "../../assets/audio/game-over.wav";
import statBG from "../../assets/images/stat-bg.png";
import { auth, db } from '../../config/firebaseConfig';
import useStore from "../../store";
import generateRandom from '../../utils/generateRandom';
import secondsToMinute from "../../utils/secondsToMinute";

function GameOverModal() {
    const [user, loading, error] = useAuthState(auth);
    const gameID = useId()
    const [playGameOverSound] = useSound(gameOverSound);
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
        if (state.gameOver != true && state.targetItems[`level${state.level}`].length == 0) {
            console.log("Valo Over")
            state.isSound ? playGameOverSound() : null
            state.setGameOver(true)
        }

        // Win Condition
        if (state.gameOver == true && state.targetItems[`level${state.level}`].length == 0) {
            console.log("Win")
            if (user) {
                const gamePlayedRef = doc(db, "users", auth.currentUser.uid);
                const gameID = generateRandom()

                const updateWindDoc = async () => {
                    await updateDoc(gamePlayedRef, {
                        totalScore: increment(state.score),
                        totalTime: increment(state.time),
                        [`gamePlayed.${gameID}`]: {
                            level: state.level,
                            score: state.score,
                            time: state.time,
                            hintTook: state.hintTook,
                            gameWon: true,
                        }
                    });
                }
                updateWindDoc()

                if (state.level != state.maxLevel) {
                    const updateLeveldDoc = async () => {
                        await updateDoc(gamePlayedRef, {
                            level: increment(1)
                        })
                    }
                    updateLeveldDoc()
                }
            }

            if (state.level != state.maxLevel) {
                state.addLevel()
                localStorage.setItem("gameLevel", parseInt(state.level) + 1)
            }


            // Lost Condition
        } else if (state.gameOver == true && state.targetItems[`level${state.level}`].length != 0) {
            console.log("Lost")
            if (user) {
                const gamePlayedRef = doc(db, "users", auth.currentUser.uid);
                const gameID = generateRandom()

                const updateLostdDoc = async () => {
                    await updateDoc(gamePlayedRef, {
                        totalScore: increment(state.score),
                        totalTime: increment(state.time),
                        [`gamePlayed.${gameID}`]: {
                            level: state.level,
                            score: state.score,
                            time: state.time,
                            hintTook: state.hintTook,
                            gameWon: false,
                        }
                    });
                }

                updateLostdDoc()
            }
        }
    }, [state.targetItems, state.gameOver]);

    return (
        <div id="popup-modal" className={`absolute inset-0 ${state.gameOver == true ? "slide-in-top" : state.gameOver == false ? "-top-[100%]" : "hidden"} font-bubblegum overflow-y-auto overflow-x-hidden z-50 h-modal h-full justify-center items-center flex bg-blend-overlay bg-white/40 transition-all duration-500`} aria-modal="true" role="dialog">
            <div className="relative p-4 w-1/2 max-w-md h-full md:h-auto" ref={imageRef}>
                <div className="relative rounded-lg shadow bg-contain bg-no-repeat px-12 pt-4" style={{ backgroundImage: `url(${statBG})` }}>
                    <div className="py-12 pl-4 text-center mt-4 flex flex-col justify-between">
                        <h1 className="text-gray-100 text-4xl mb-2">Game {state.score == 6 ? "Won" : "Over"}!</h1>
                        <h1 className="text-gray-100 text-2xl mb-2">Your Score: {state.score}</h1>
                        <h1 className="text-gray-100 text-2xl">Total Time: {secondsToMinute(state.time).minutes}:{secondsToMinute(state.time).seconds}</h1>
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