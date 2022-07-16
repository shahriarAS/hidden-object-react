import button from "../../assets/images/button.png";
import fullscreenOn from "../../assets/images/fullscreen-on.png";
import music1 from "../../assets/images/music1.png";
import music2 from "../../assets/images/music2.png";
import sound1 from "../../assets/images/sound1.png";
import sound2 from "../../assets/images/sound2.png";
import useStore from "../../store";
import GameStat from "./GameStat";

function GameControl({ goFullScreen, closeScreen }) {
    const state = useStore((state) => state)

    return (
        <div className="game-controls w-32 border bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center py-4 gap-4">
            <div className="control-btn bg-cover bg-no-repeat w-24 h-14 flex items-center justify-center text-center text-white font-bubblegum text-3xl pl-4 transition-all duration-150 cursor-pointer hover:scale-110" style={{ backgroundImage: `url(${button})` }}>Hint</div>
            <div className="control-btn bg-cover bg-no-repeat w-24 h-14 flex items-center justify-center text-center text-white font-bubblegum text-3xl pl-4  transition-all duration-150 cursor-pointer hover:scale-110" style={{ backgroundImage: `url(${button})` }} onClick={() => {
                // Reduce Time Problem Fixed. Warning! Don't touch without prior knowledge
                state.setReduceTime(0)
                state.setGamePause(true)
            }}>Pause</div>
            <GameStat />
            <div className="control-panel grid grid-cols-2 gap-2 text-2xl">
                {
                    state.isSound ? (<img onClick={state.toggleSound} src={sound1} width={40} alt="Sound" className="cursor-pointer" />) : (<img onClick={state.toggleSound} src={sound2} width={40} alt="No Sound" className="cursor-pointer" />)
                }
                {
                    state.isMusic ? (<img onClick={state.toggleMusic} src={music1} width={40} alt="Music" className="cursor-pointer" />) : (<img onClick={state.toggleMusic} src={music2} width={40} alt="No Music" className="cursor-pointer" />)
                }
                {
                    state.isFullScreen ? (
                        <img src={fullscreenOn} onClick={goFullScreen} width={40} alt="Full Screen" className="cursor-pointer" />
                    ) : (
                        <img src={fullscreenOn} onClick={closeScreen} width={40} alt="Full Screen" className="cursor-pointer" />
                    )
                }
            </div>
        </div>
    );
}

export default GameControl;