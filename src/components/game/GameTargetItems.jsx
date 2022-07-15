import { useEffect, useState } from "react";
import grid from "../../assets/images/grid.png";
import useStore from "../../store";
import getFilename from "../../utils/getFilename";

function GameTargetItems({ targetItems }) {
    const [imgItemState, setImgItemState] = useState([]);
    const state = useStore((state) => state)

    const removeItem = (item) => {
        console.log("Remove ITem", getFilename(item))
        state.removeTargetItem(state.level, getFilename(item))
    }

    useEffect(() => {
        setImgItemState([])
        state.targetItems[`level${state.level}`].forEach(imgName => {
            import(`../../assets/images/${imgName}.png`).then(image => {
                setImgItemState(prevState => (
                    [...prevState, image.default]
                ))
            }
            )
        });
        console.log("FIRE ONCE")
    }, [state.targetItems]);

    return (
        <div className="game-target h-full p-2 flex flex-col flex-wrap items-center justify-start gap-1">
            {
                imgItemState.map(
                    item => (
                        <div key={item} onClick={() => removeItem(item)} className="target p-2 w-20 h-20 bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${grid})` }}>
                            <img src={item} alt="Object 5" />
                        </div>
                    )
                )
            }
        </div>
    );
}

export default GameTargetItems;