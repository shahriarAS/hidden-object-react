import { useEffect, useRef, useState } from "react";
import useSound from 'use-sound';
import rightSound from "../../assets/audio/right.wav";
import bg1 from "../../assets/images/bg1.jpg";
import vanish from "../../assets/images/vanish.gif";
import useStore from "../../store";
import getFilename from "../../utils/getFilename";
import HiddenObject from "./HiddenObject";

function GameArea() {
    const [imgItemState, setImgItemState] = useState([]);
    const vanishRef = useRef()
    const state = useStore((state) => state)
    const [playRightSound] = useSound(rightSound);

    const removeItem = (e, item) => {
        const soln = state.targetItems[`level${state.level}`].map(i => i.file)
        if (soln.includes(getFilename(item))) {
            state.isSound ? playRightSound() : null
            const vanishEl = vanishRef.current
            vanishEl.style.left = `${e.target.x - (e.target.width + 20)}px`
            vanishEl.style.top = `${e.target.y - (e.target.height + 20)}px`
            vanishEl.classList.remove("hidden")
            e.target.classList.add("bounce-out-top")
            // toast.success('Correct! Got 1 Point.')

            setTimeout(function () {
                e.target.style.visibility = "hidden"
                e.target.style.opacity = 0
                state.removeTargetItem(state.level, getFilename(item))
                state.addScore()
                setTimeout(function () {
                    vanishEl.classList.add("hidden")
                }, 400);
            }, 400);
        } else {
            // toast.error("Wrong! 10 Seconds Reduced.")
            setTimeout(function () {
                state.setReduceTime(Math.random())
                e.target.classList.remove("shake-horizontal")
            }, 500);
            e.target.classList.add("shake-horizontal")
        }
    }

    useEffect(() => {
        setImgItemState([])

        var levelList = [];
        for (let i = 0, j = 3; i < j; i++) {
            let randNumber = Math.round(Math.random() * state.maxLevel)
            if (!levelList.includes(randNumber) & randNumber > 0) {
                levelList.push(randNumber)
            } else {
                i--
            }
        }
        if (!levelList.includes(parseInt(state.level))) {
            levelList.push(parseInt(state.level))
        }

        levelList.forEach(i => {
            state.targetItems[`level${i}`].forEach(imgName => {
                import(`../../assets/images/${imgName.file}.png`).then(image => {
                    setImgItemState(prevState => (
                        [...prevState, { file: image.default, position: imgName.position }]
                    ))
                }
                )
            });
        })
        // for (let i = 1; i < (state.maxLevel + 1); i++) {

        // }
        console.log("FIRE ONCE")
    }, []);

    return (
        <div className="game-area w-full h-full mr-1 relative overflow-hidden bg-contain bg-no-repeat">
            <img src={bg1} alt="" className="w-full h-full" loading="lazy" />
            <img src={vanish} ref={vanishRef} alt="Vanish" className="absolute hidden z-50" />
            {
                imgItemState.map(
                    imgItem => (
                        <HiddenObject key={imgItem.file} img={imgItem.file} top={imgItem.position[0]} left={imgItem.position[1]} removeItem={removeItem} />
                    )
                )
            }
        </div>
    );
}

export default GameArea;