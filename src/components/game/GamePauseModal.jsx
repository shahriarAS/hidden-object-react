import { doc, updateDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import close from "../../assets/images/close.png";
import music1 from "../../assets/images/music1.png";
import music2 from "../../assets/images/music2.png";
import sound1 from "../../assets/images/sound1.png";
import sound2 from "../../assets/images/sound2.png";
import statBG from "../../assets/images/stat-bg.png";
import { auth, db } from '../../config/firebaseConfig';
import useStore from "../../store";
import secondsToMinute from "../../utils/secondsToMinute";


function GamePauseModal() {
    const state = useStore((state) => state)
    const [user, loading, error] = useAuthState(auth);

    const gameContinue = () => {
        // Reduce Time Problem Fixed. Warning! Don't touch without prior knowledge
        state.setReduceTime(0)
        state.setGamePause(false)
    }

    const toggleSoundSetting = () => {
        if (user) {
            const gamePlayedRef = doc(db, "users", auth.currentUser.uid);
            const updateSoundDoc = async () => {
                await updateDoc(gamePlayedRef, {
                    "settings.isSound": !state.isSound
                });
            }
            updateSoundDoc()
        }
        state.toggleSound()
    }

    const toggleMusicSetting = () => {
        if (user) {
            const gamePlayedRef = doc(db, "users", auth.currentUser.uid);
            const updateMusicDoc = async () => {
                await updateDoc(gamePlayedRef, {
                    "settings.isMusic": !state.isMusic
                });
            }
            updateMusicDoc()
        }
        state.toggleMusic()
    }

    return (
        <div id="popup-modal" className={`absolute inset-0 ${state.gamePause == true ? "slide-in-top" : state.gamePause == false ? "-top-[100%]" : "hidden"} font-bubblegum overflow-y-auto overflow-x-hidden z-50 h-modal h-full justify-center items-center flex bg-blend-overlay bg-white/40 transition-all duration-500 `} aria-modal="true" role="dialog">
            <div className="relative p-4 w-96 border-2 border-red-500">
                <div className="relative w-full h-full rounded-lg bg-cover bg-center bg-no-repeat border border-green-700" style={{ backgroundImage: `url(${statBG})` }}>
                    <button type="button" className="absolute bg-transparent top-3 -right-2" onClick={() => {
                        // Reduce Time Problem Fixed. Warning! Don't touch without prior knowledge
                        state.setReduceTime(0)
                        state.setGamePause(false)
                    }}>
                        <img src={close} alt="" />
                    </button>
                    <div className="p-6 mt-12 text-center flex flex-col gap-2 justify-between items-center">
                        <h1 className="text-gray-100 text-6xl mt-1 mb-2">Paused</h1>
                        <h1 className="text-gray-100 text-3xl mt-4">Your Score: {state.score}</h1>
                        <h1 className="text-gray-100 text-3xl">Total Time: {secondsToMinute(state.time).minutes}:{secondsToMinute(state.time).seconds}</h1>
                        <div className="control-panel flex justify-center gap-4 my-2 mt-4">
                            {
                                state.isSound ? (<img onClick={toggleSoundSetting} src={sound1} width={40} alt="Sound" className="cursor-pointer" />) : (<img onClick={toggleSoundSetting} src={sound2} width={40} alt="No Sound" className="cursor-pointer" />)
                            }
                            {
                                state.isMusic ? (<img onClick={toggleMusicSetting} src={music1} width={40} alt="Music" className="cursor-pointer" />) : (<img onClick={toggleMusicSetting} src={music2} width={40} alt="No Music" className="cursor-pointer" />)
                            }
                        </div>
                        <div className="flex justify-between items-center gap-4 mt-2">
                            <button type="button" className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-xl py-2.5 w-36"><Link to="/">Menu</Link></button>
                            <button type="button" className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-xl py-2.5 w-36" onClick={gameContinue}>Continue</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamePauseModal;