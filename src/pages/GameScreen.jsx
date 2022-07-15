import GameArea from "../components/game/GameArea";
import GameOptions from "../components/game/GameOptions";

function GameScreen() {
    return (
        <>
            <div className="game-screen w-3/4 m-auto flex items-center justify-center">
                <GameArea />
                <GameOptions />
            </div>
        </>
    );
}

export default GameScreen;