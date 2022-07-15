import GameArea from "../components/game/GameArea";
import GameOptions from "../components/game/GameOptions";
import GameOverModal from "../components/game/GameOverModal";
import GamePauseModal from "../components/game/GamePauseModal";

function GameScreen() {
    return (
        <>
            <div className="game-screen h-screen m-auto flex items-center justify-center">
                <GameArea />
                <GameOptions />
                <GamePauseModal />
                <GameOverModal />
            </div>
        </>
    );
}

export default GameScreen;