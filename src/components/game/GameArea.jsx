import { useEffect, useState } from "react";
import HiddenObject from "./HiddenObject";

function GameArea({ items, targetItems }) {
    const [imgItemState, setImgItemState] = useState([]);

    const generatePosition = () => {
        return {
            x: Math.random() * (window.innerWidth - 100) + 10,
            y: Math.random() * (window.innerHeight - (200)) + 58,
        }
    }

    const onImageClick = (e, clickedItem) => {
        console.log(e)
        if (targetItems.includes(clickedItem)) {
            // e.target.style.visibility = "hidden"
            e.target.style.opacity = "0"
            // e.target.style.cursor = "not-allowed"
            // alert("Great!")
        } else {
            alert("Wrong.")
        }
    }

    useEffect(() => {
        items.forEach(element => {
        import(`../../assets/images/objects/${element}.png`).then(image =>
            setImgItemState(prevState => (
                [...prevState, image.default]
            ))
        )
    });
        console.log("FIRE ONCE")
    }, []);

    return (
        <div className="">
            {
                imgItemState.map(
                    imgItem => (
                        <HiddenObject key={imgItem} img={imgItem} top={generatePosition().y} left={generatePosition().x} onImageClick={onImageClick} />
                    )
                )
            }
            {/* <HiddenObject img={require(`../../assets/images/objects/${imgFilename}.jpeg`)} top={generatePosition().y} left={generatePosition().x} onImageClick={onImageClick} />
            <HiddenObject img={hidde_obj2} top={generatePosition().y} left={generatePosition().x} onImageClick={onImageClick} />
            <HiddenObject img={hidde_obj3} top={generatePosition().y} left={generatePosition().x} onImageClick={onImageClick} />
            <HiddenObject img={hidde_obj4} top={generatePosition().y} left={generatePosition().x} onImageClick={onImageClick} />
            <HiddenObject img={hidde_obj5} top={generatePosition().y} left={generatePosition().x} onImageClick={onImageClick} /> */}
        </div>
    );
}

export default GameArea;