import { useEffect, useRef } from "react";
import wood from "../assets/images/wood_black.jpg";
import toast from "react-hot-toast";
import GameArea from "../components/game/GameArea";
import GameOptions from "../components/game/GameOptions";
import GameOverModal from "../components/game/GameOverModal";
import GamePauseModal from "../components/game/GamePauseModal";
import useStore from "../store/index";

function GameScreen() {
    const state = useStore((state) => state)
    const imgRef = useRef()
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

    const hintExecute = () => {
        if (state.hintTook < 2) {
            const imgEl = appRef.current
            const gameScreenNode = imgEl.childNodes[0].childNodes
            let isBreak = false
            gameScreenNode.forEach(node => {
                if (state.showHint & state.targetItems[`level${state.level}`].map(i => i.file).includes(node.id) & isBreak == false) {
                    node.classList.add("border-8", "border-red-500", "rounded-full", "jello-horizontal")
                    setTimeout(function () {
                        node.classList.remove("border-8", "border-red-500", "rounded-full", "jello-horizontal")
                    }, 1500);
                    state.setShowHint(false)
                    isBreak = true
                }
            })
            state.addHintTook()
        } else {
            toast.error(`Sorry! You can't use "Hint" more than 2 times.`)
        }
        state.setShowHint(false)
    }

    useEffect(() => {
        state.showHint ? hintExecute() : null
    }, [state.showHint]);

    return (
        <div ref={appRef} className="game-screen w-4/5 max-w-[1100px] h-[605px] max-h-[800px] m-auto flex items-center justify-center overflow-hidden"  style={{ backgroundImage: `url(${wood})` }}>
            <GameArea />
            <GameOptions goFullScreen={goFullScreen} closeScreen={closeScreen} />
            <GamePauseModal />
            <GameOverModal />
        </div>
    );
}

export default GameScreen;