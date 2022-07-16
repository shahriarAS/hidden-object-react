import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import bg1 from "../../assets/images/bg1.jpg";
import useStore from "../../store";
import getFilename from "../../utils/getFilename";
import HiddenObject from "./HiddenObject";

function GameArea() {
    const [imgItemState, setImgItemState] = useState([]);
    const state = useStore((state) => state)

    const removeItem = (e, item) => {
        const soln = state.targetItems[`level${state.level}`].map(i => i.file)
        if (soln.includes(getFilename(item))) {
            toast.success('Correct! Got 1 Point.')
            setTimeout(function () {
                e.target.style.visibility = "hidden"
                e.target.style.opacity = 0
                state.removeTargetItem(state.level, getFilename(item))
                state.addScore()
            }, 500);
            e.target.classList.add("bounce-out-top")
        } else {
            toast.error("Wrong! 10 Seconds Reduced.")
            setTimeout(function () {
                state.setReduceTime(Math.random())
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
        <div className="game-area w-full h-full border-2 mr-2 relative overflow-hidden bg-contain bg-no-repeat">
            <img src={bg1} alt="" className="w-full h-full" />
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