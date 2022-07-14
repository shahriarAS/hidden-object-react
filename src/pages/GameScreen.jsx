import object1 from "../assets/images/1_1.png";
import object2 from "../assets/images/1_2.png";
import object3 from "../assets/images/1_3.png";
import object4 from "../assets/images/1_4.png";
import object5 from "../assets/images/1_5.png";
import object6 from "../assets/images/1_6.png";
import object7 from "../assets/images/1_7.png";
import bg1 from "../assets/images/bg1.jpg";
import button from "../assets/images/button.png";
import controlBG from "../assets/images/control-bg.png";
import fullscreenOn from "../assets/images/fullscreen-on.png";
import grid from "../assets/images/grid.png";
import music1 from "../assets/images/music1.png";
import music2 from "../assets/images/music2.png";
import sound1 from "../assets/images/sound1.png";
import sound2 from "../assets/images/sound2.png";
import statBG from "../assets/images/stat-bg.png";

function GameScreen() {
    return (
        <>
            <div className="game-screen h-screen m-auto w-3/4 flex">
                <div className="game-area w-full h-screen flex justify-end bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg1})` }}>
                </div>
                <div className="game-options flex bg-no-repeat bg-cover" style={{ backgroundImage: `url(${controlBG})` }}>
                    {/* <div className="game-area w-4 h-screen bg-contain" style={{ backgroundImage: `url(${frame})` }}>
                    </div> */}
                    <div className="game-target h-full p-2 flex flex-col flex-wrap items-center justify-start gap-1">
                        {
                            [object1, object2, object3, object4, object5, object6, object7].map(
                                item => (
                                    <div className="target p-2 w-20 h-20 bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${grid})` }}>
                                        <img src={item} alt="Object 5" />
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className="game-controls h-full w-28 border bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center py-4 gap-4">
                        <div className="control-btn bg-cover bg-no-repeat w-24 h-14 flex items-center justify-center text-center text-white font-bubblegum text-3xl pl-4 transition-all delay-150 cursor-pointer hover:scale-110" style={{ backgroundImage: `url(${button})` }}>Hint</div>
                        <div className="control-btn bg-cover bg-no-repeat w-24 h-14 flex items-center justify-center text-center text-white font-bubblegum text-3xl pl-4  transition-all delay-150 cursor-pointer hover:scale-110" style={{ backgroundImage: `url(${button})` }}>Pause</div>
                        <div className="control-btn bg-contain bg-no-repeat w-24 h-24 pt-4 flex flex-col items-center text-center text-white font-bubblegum text-xl" style={{ backgroundImage: `url(${statBG})` }}>
                            <p>Score:</p>
                            <p>20</p>
                        </div>
                        <div className="control-btn bg-contain bg-no-repeat w-24 h-24 pt-4 flex flex-col items-center text-center text-white font-bubblegum text-xl" style={{ backgroundImage: `url(${statBG})` }}>
                            <p>Time:</p>
                            <p>3:21</p>
                        </div>
                        <div className="control-btn bg-contain bg-no-repeat w-24 h-24 pt-4 flex flex-col items-center text-center text-white font-bubblegum text-xl" style={{ backgroundImage: `url(${statBG})` }}>
                            <p>Level:</p>
                            <p>1/10</p>
                        </div>
                        <div className="control-panel grid grid-cols-2 gap-2 text-2xl">
                            {
                                <img src={sound1} width={40} alt="Sound" className="cursor-pointer" /> ||
                                <img src={sound2} width={40} alt="No Sound" className="cursor-pointer" />
                            }
                            {
                                <img src={music1} width={40} alt="Music" className="cursor-pointer" /> ||
                                <img src={music2} width={40} alt="No Music" className="cursor-pointer" />
                            }
                            <img src={fullscreenOn} width={40} alt="Full Screen" className="cursor-pointer" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default GameScreen;