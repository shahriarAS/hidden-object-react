import { useEffect, useState } from "react";

function GameTargetItems({ targetItems }) {
    const [imgItemState, setImgItemState] = useState([]);

    useEffect(() => {
        targetItems.forEach(element => {
            import(`../../assets/images/objects/${element}.png`).then(image =>
                setImgItemState(prevState => (
                    [...prevState, image.default]
                ))
            )
        });
        console.log("FIRE ONCE")
    }, []);

    return (
        <div className="w-3/4 h-12 p-4 bg-red-300 rounded-lg flex items-center justify-center">
            {
                imgItemState.map(
                    imgItem => (
                        <div className="item px-8">
                            <img src={imgItem} width={40} height={10} />
                        </div>
                    )
                )
            }
        </div>
    );
}

export default GameTargetItems;