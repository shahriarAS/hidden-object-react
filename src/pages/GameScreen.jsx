import { useRef } from "react";
import GameArea from "../components/game/GameArea";
import GameOptions from "../components/game/GameOptions";
import GameOverModal from "../components/game/GameOverModal";
import GamePauseModal from "../components/game/GamePauseModal";
import useStore from "../store";

function GameScreen() {
    const state = useStore((state) => state)
    const appRef = useRef();

    const goFullScreen = () => {
        state.toggleFullScreen()
        var elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE11 */
            elem.msRequestFullscreen();
        }
    };

    const closeScreen = async () => {
        state.toggleFullScreen()
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE11 */
            document.msExitFullscreen();
        }
    };

    return (
        <div ref={appRef} className="game-screen h-screen m-auto flex items-center justify-center">
            <GameArea />
            <GameOptions goFullScreen={goFullScreen} closeScreen={closeScreen} />
            <GamePauseModal />
            <GameOverModal />
        </div>
    );
}

export default GameScreen;