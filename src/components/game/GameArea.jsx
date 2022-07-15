import { useEffect, useState } from "react";
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

            setTimeout(function () {
                state.removeTargetItem(state.level, getFilename(item))
                state.addScore()
            }, 280);
            e.target.style.visibility = "hidden"
            e.target.style.opacity = 0
        } else {
            
        }
    }

    useEffect(() => {
        setImgItemState([])
        for (let i = 1; i < 3; i++) {
            state.targetItems[`level${i}`].forEach(imgName => {
                import(`../../assets/images/${imgName.file}.png`).then(image => {
                    setImgItemState(prevState => (
                        [...prevState, { file: image.default, position: imgName.position }]
                    ))
                }
                )
            });
        }
        console.log("FIRE ONCE")
    }, [state.targetItems]);

    return (
        <div className="game-area h-screen mr-2 relative overflow-hidden magictime puffin">
            <img src={bg1} className="w-full h-full" alt="" />
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