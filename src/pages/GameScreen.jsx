import bg1 from "../assets/images/bg1.jpg";
import controlBG from "../assets/images/control-bg.png";
import GameControl from "../components/game/GameControl";
import GameTargetItems from "../components/game/GameTargetItems";

function GameScreen() {
    return (
        <>
            <div className="game-screen h-screen m-auto w-3/4 flex">
                <div className="game-area w-full h-screen flex justify-end bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg1})` }}>
                </div>
                <div className="game-options flex bg-no-repeat bg-cover" style={{ backgroundImage: `url(${controlBG})` }}>
                    <GameTargetItems />
                    <GameControl />
                </div>

            </div>
        </>
    );
}

export default GameScreen;