import { useEffect, useState } from "react";
import bg1 from "../../assets/images/bg1.jpg";
import useStore from "../../store";
import getFilename from "../../utils/getFilename";
import HiddenObject from "./HiddenObject";

function GameArea() {
    const [imgItemState, setImgItemState] = useState([]);
    const state = useStore((state) => state)

    const removeItem = (item) => {
        console.log("Remove ITem", getFilename(item))
        state.removeTargetItem(state.level, getFilename(item))
    }

    useEffect(() => {
        setImgItemState([])
        state.targetItems[`level${state.level}`].forEach(imgName => {
            import(`../../assets/images/${imgName.file}.png`).then(image => {
                setImgItemState(prevState => (
                    [...prevState, { file: image.default, position: imgName.position }]
                ))
            }
            )
        });
        console.log("FIRE ONCE")
    }, [state.targetItems]);

    return (
        <div className="game-area h-screen mr-2 relative overflow-hidden">
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