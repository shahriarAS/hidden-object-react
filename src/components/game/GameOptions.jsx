import controlBG from "../../assets/images/control-bg.png";
import GameControl from "./GameControl";
import GameTargetItems from "./GameTargetItems";
function GameOptions({ goFullScreen, closeScreen }) {
    return (

        <div className="game-options h-full flex bg-no-repeat bg-cover" style={{ backgroundImage: `url(${controlBG})` }}>
            <GameTargetItems />
            <GameControl goFullScreen={goFullScreen} closeScreen={closeScreen}/>
        </div>
    );
}

export default GameOptions;