import GameArea from "../components/game/GameArea";
import GameOptions from "../components/game/GameOptions";

function GameScreen() {
    return (
        <>
            <div className="game-screen h-screen m-auto flex items-center justify-center">
                <GameArea />
                <GameOptions />
            </div>
        </>
    );
}

export default GameScreen;