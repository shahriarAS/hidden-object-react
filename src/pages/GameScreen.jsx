import { useEffect, useRef } from "react";
import GameArea from "../components/game/GameArea";
import GameOptions from "../components/game/GameOptions";
import GameOverModal from "../components/game/GameOverModal";
import GamePauseModal from "../components/game/GamePauseModal";
import useStore from "../store";

function GameScreen() {
    const state = useStore((state) => state)
    const appRef = useRef();
    const outerAppRef = useRef("");
    const outerScreenRef = useRef("");

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

    useEffect(() => {
        //Responsive Scaling
        let outer = appRef.current
        let wrapper = appRef.current
        // let maxWidth = outer.clientWidth
        // let maxHeight = outer.clientHeight
        let maxWidth = window.innerWidth
        let maxHeight = window.innerHeight

        window.addEventListener("resize", resize);
        resize();

        function resize() {
            let scale
            let width = window.innerWidth
            let height = window.innerHeight
            let isMax = width >= maxWidth && height >= maxHeight
            outer.style.transform = "scale(" + 1 + ")";
            console.log("Size", maxWidth, maxHeight, width, height)

            if (width > maxWidth && height > maxHeight) {
                let x = width / maxWidth
                // let y = (height - maxHeight) / maxHeight
                // console.log("Resize", width, height, x, y)
                // wrapper.style.transform = `scale(${0-x})`;
                scale = Math.min(width / maxWidth, height / maxHeight);
                outer.style.transform = "scale(" + scale + ")";
                wrapper.style.width = maxWidth * scale;
                wrapper.style.height = maxHeight * scale;
                console.log(`Resize with scale ${x}`)
            }

            // scale = Math.min(width / maxWidth, height / maxHeight);
            // outer.style.transform = "scale(" + scale + ")";
            // wrapper.style.width = maxWidth * scale;
            // wrapper.style.height = maxHeight * scale;
        }
    }, []);

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