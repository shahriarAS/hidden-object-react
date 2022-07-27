import { doc, increment, updateDoc } from "firebase/firestore";
import { toBlob } from 'html-to-image';
import { useEffect, useId, useRef, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import gameOverSound from "../../assets/audio/game-over.wav";
import statBG from "../../assets/images/stat-bg.png";
import { auth, db } from '../../config/firebaseConfig';
import useStore from "../../store";
import generateRandom from '../../utils/generateRandom';
import globalVariable from "../../utils/globalVariable";
import secondsToMinute from "../../utils/secondsToMinute";

function GameOverModal() {
    const [user, loading, error] = useAuthState(auth);
    const [forceOpenModal, setForceOpenModal] = useState(false)
    const [opponentTime, setOpponentTime] = useState("")
    const [thisGameWon, setThisGameWon] = useState(false)
    const gameID = useId()
    const [playGameOverSound] = useSound(gameOverSound);
    let navigate = useNavigate()
    const state = useStore((state) => state)
    const socket = useStore((state) => state.socket)
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
            url: import.meta.env.VITE_CLIENT_URL
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

    socket.on("over-show", time => {
        setOpponentTime(time)
    })


    useEffect(() => {
        if (state.gameOver != true & state.targetItems[`level${state.level}`].length == 0) {
            // When Every target items are finished.
            state.setGameOver(true)

            // if (state.score == globalVariable.maxScore) {
            //     // Win Condition
            //     state.isSound ? playGameOverSound() : null
            //     console.log("Win")
            //     if (user) {
            //         const gamePlayedRef = doc(db, "users", auth.currentUser.uid);
            //         const gameID = generateRandom()

            //         const updateWindDoc = async () => {
            //             await updateDoc(gamePlayedRef, {
            //                 totalScore: increment(state.score),
            //                 totalTime: increment(state.time),
            //                 winCount: increment(1),
            //                 totalMatch: increment(1),
            //                 highScore: state.score > state.highScore ? state.score : increment(0),
            //                 bestTime: state.time > state.bestTime ? state.time : increment(0),
            //                 [`gamePlayed.${gameID}`]: {
            //                     level: state.level,
            //                     score: state.score,
            //                     opponentScore: 0,
            //                     time: state.time,
            //                     hintTook: state.hintTook,
            //                     gameWon: true,
            //                     gameMode: state.gameMode,
            //                     createdAt: Date.now()
            //                 }
            //             });
            //         }
            //         state.time != "init" ? updateWindDoc() : null

            //         if (state.level != state.maxLevel & state.gameMode == "singleplayer") {
            //             const updateLeveldDoc = async () => {
            //                 await updateDoc(gamePlayedRef, {
            //                     level: increment(1)
            //                 })
            //             }
            //             state.time != "init" ? updateLeveldDoc() : null
            //         }
            //     }

            //     if (state.level != state.maxLevel & state.gameMode == "singleplayer") {
            //         // state.addLevel()
            //         localStorage.setItem("gameLevel", parseInt(state.level) + 1)
            //     }
            // }
            // else {
            //     if (state.gameMode == "singleplayer") {
            //         if (user) {
            //             const gamePlayedRef = doc(db, "users", auth.currentUser.uid);
            //             const gameID = generateRandom()

            //             const updateLostdDoc = async () => {
            //                 await updateDoc(gamePlayedRef, {
            //                     totalScore: increment(state.score),
            //                     totalTime: increment(state.time),
            //                     totalMatch: increment(1),
            //                     highScore: state.score > state.highScore ? state.score : increment(0),
            //                     bestTime: state.time > state.bestTime ? state.time : increment(0),
            //                     [`gamePlayed.${gameID}`]: {
            //                         level: state.level,
            //                         score: state.score,
            //                         opponentScore: 0,
            //                         time: state.time,
            //                         hintTook: state.hintTook,
            //                         gameWon: false,
            //                         gameMode: state.gameMode,
            //                         createdAt: Date.now()
            //                     }
            //                 });
            //             }

            //             state.time != "init" ? updateLostdDoc() : null
            //         }
            //     } else if (state.gameMode == "multiplayer") {
            //         if (user) {
            //             console.log("Multiplayer Lost")
            //             const opponentScore = (globalVariable.maxScore - state.score - state.targetItems[`level${state.level}`].length)
            //             // let gameWon = ""
            //             // let opponentTime = ""

            //             // socket.on("show-time", time => {
            //             //     opponentTime = time
            //             // })

            //             // if (state.score > opponentScore) {
            //             //     gameWon = true
            //             // } else if (state.score == opponentScore) {
            //             //     console.log(opponentTime)
            //             //     if (state.time < opponentTime) {
            //             //         gameWon = true
            //             //     } else {
            //             //         gameWon = false
            //             //     }
            //             // } else {
            //             //     gameWon = false
            //             // }

            //             const gamePlayedRef = doc(db, "users", auth.currentUser.uid);
            //             const gameID = generateRandom()

            //             const updateLostdDoc = async () => {
            //                 await updateDoc(gamePlayedRef, {
            //                     totalScore: increment(state.score),
            //                     totalTime: increment(state.time),
            //                     totalMatch: increment(1),
            //                     highScore: state.score > state.highScore ? state.score : increment(0),
            //                     bestTime: state.time > state.bestTime ? state.time : increment(0),
            //                     [`gamePlayed.${gameID}`]: {
            //                         level: state.level,
            //                         score: state.score,
            //                         opponentScore: opponentScore,
            //                         time: state.time,
            //                         hintTook: state.hintTook,
            //                         gameWon: state.gameWon,
            //                         gameMode: state.gameMode,
            //                         createdAt: Date.now()
            //                     }
            //                 });
            //             }

            //             console.log("The time is: ", state.time)
            //             state.time != "init" ? updateLostdDoc() : null
            //         }
            //     }
            // }

        } else if (state.gameOver == true) {
            // When Target items left and time is finished.
            state.isSound ? playGameOverSound() : null

            if (state.gameMode == "singleplayer") {
                if (user) {
                    const gamePlayedRef = doc(db, "users", auth.currentUser.uid);
                    const gameID = generateRandom()

                    const updateSingledDoc = async () => {
                        await updateDoc(gamePlayedRef, {
                            totalScore: increment(state.score),
                            totalTime: increment(state.time),
                            winCount: (state.score == globalVariable.maxScore) ? increment(1) : increment(0),
                            totalMatch: increment(1),
                            highScore: state.score > state.highScore ? state.score : increment(0),
                            bestTime: state.time > state.bestTime ? state.time : increment(0),
                            [`gamePlayed.${gameID}`]: {
                                level: state.level,
                                score: state.score,
                                opponentScore: 0,
                                time: state.time,
                                hintTook: state.hintTook,
                                gameWon: (state.score == globalVariable.maxScore) ? true : false,
                                gameMode: state.gameMode,
                                createdAt: Date.now()
                            }
                        });
                    }

                    state.time != "init" ? updateSingledDoc() : null

                    if (state.level != state.maxLevel & state.score == globalVariable.maxScore) {
                        const updateLeveldDoc = async () => {
                            await updateDoc(gamePlayedRef, {
                                level: increment(1)
                            })
                        }
                        state.time != "init" ? updateLeveldDoc() : null
                    }

                    if (state.level != state.maxLevel & state.score == globalVariable.maxScore) {
                        state.addLevel()
                        localStorage.setItem("gameLevel", parseInt(state.level) + 1)
                    }
                }
            } else if (state.gameMode == "multiplayer") {
                if (user) {
                    console.log("Multiplayer Lost")
                    const opponentScore = (globalVariable.maxScore - state.score - state.targetItems[`level${state.level}`].length)

                    if (state.score > opponentScore) {
                        setThisGameWon(true)
                    } else if (state.score == opponentScore) {
                        console.log(opponentTime)
                        if (state.time < opponentTime) {
                            setThisGameWon(true)
                        } else {
                            setThisGameWon(false)
                        }
                    } else {
                        setThisGameWon(false)
                    }

                    const gamePlayedRef = doc(db, "users", auth.currentUser.uid);
                    const gameID = generateRandom()


                    if (state.gameWon == false) {
                        const updateMultiDoc = async () => {
                            // This is just dirty code. Somehow this function is rendering 2 times and unable to fix it. That's why this line to run only one.
                            state.setGameWon(true)
                            console.log("The time is: ", state.time)
                            await updateDoc(gamePlayedRef, {
                                totalScore: increment(state.score),
                                totalTime: increment(state.time),
                                winCount: thisGameWon ? increment(1) : increment(0),
                                totalMatch: increment(1),
                                highScore: state.score > state.highScore ? state.score : increment(0),
                                bestTime: state.time > state.bestTime ? state.time : increment(0),
                                [`gamePlayed.${gameID}`]: {
                                    level: state.level,
                                    score: state.score,
                                    opponentScore: opponentScore,
                                    time: state.time,
                                    hintTook: state.hintTook,
                                    gameWon: thisGameWon,
                                    gameMode: state.gameMode,
                                    createdAt: Date.now()
                                }
                            });
                        }
                        state.time != "init" ? updateMultiDoc() : null
                    }
                }
            }
        }
    }, [state.targetItems, state.time]);

    return (
        <div id="popup-modal" className={`absolute inset-0 ${(state.gameOver == true || forceOpenModal == true) ? "slide-in-top" : (state.gameOver == false || forceOpenModal == false) ? "-top-[100%]" : "hidden"
            } font-bubblegum overflow-y-auto overflow-x-hidden z-50 h-modal h-full justify-center items-center flex bg-blend-overlay bg-white/40 transition-all duration-500`} aria-modal="true" role="dialog">
            <div className="relative p-4 w-1/2 max-w-md h-full md:h-auto" ref={imageRef}>
                <div className="relative rounded-lg shadow bg-contain bg-no-repeat px-12 pt-4" style={{ backgroundImage: `url(${statBG})` }}>
                    <div className="py-12 pl-4 text-center mt-4 flex flex-col justify-between">
                        {
                            state.gameMode == "singleplayer" ? (
                                <>
                                    <h1 className="text-gray-100 text-4xl mb-2">Game {state.score == globalVariable.maxScore ? "Won" : "Over"}!</h1>
                                    <h1 className="text-gray-100 text-xl mb-1">Your Score: {state.score}</h1>
                                    <h1 className="text-gray-100 text-xl">Your Time: {secondsToMinute(state.time).minutes}:{secondsToMinute(state.time).seconds}</h1>
                                </>
                            ) : (
                                <>
                                    <h1 className="text-gray-100 text-4xl mb-2">You {thisGameWon ? "Won" : "Lost"}!</h1>
                                    <h1 className="text-gray-100 text-xl">Your Score: {state.score}</h1>
                                    <h1 className="text-gray-100 text-xl">Your Time: {secondsToMinute(state.time).minutes}:{secondsToMinute(state.time).seconds}</h1>
                                    <h1 className="text-gray-100 text-xl">Opponent Score: {(globalVariable.maxScore - state.score - state.targetItems[`level${state.level}`].length)}</h1>
                                    <h1 className="text-gray-100 text-xl">Opponent Time: {secondsToMinute(opponentTime).minutes}:{secondsToMinute(opponentTime).seconds}</h1>
                                </>

                            )
                        }
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <button type="button" className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-4 py-2 mb-2 text-xl">
                                <Link to="/">Menu</Link>
                            </button>
                            {
                                (state.score < globalVariable.maxScore) ? (<button type="button" onClick={goNextLevel} className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-4 py-2 mb-2 text-xl">
                                    Restart
                                </button>) : null
                            }
                            {
                                (state.level != state.maxLevel & state.score == globalVariable.maxScore) ? (<button type="button" onClick={goNextLevel} className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-4 py-2 mb-2 text-xl">
                                    Next Level
                                </button>) : null
                            }
                            {
                                state.score == globalVariable.maxScore ? <button type="button" onClick={handleShare} className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-4 py-2 mb-2 text-xl">Share</button> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default GameOverModal;