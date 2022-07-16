import { useEffect, useRef } from "react";
import useStore from "../../store";
import getFilename from "../../utils/getFilename";

function HiddenObject({ img, top, left, removeItem }) {
    const state = useStore((state) => state)
    const imgRef = useRef()

    const hintExecute = () => {
        const imgEl = imgRef.current
        if (state.showHint & state.targetItems[`level${state.level}`].map(i => i.file).includes(imgEl.alt)) {
            console.log(imgEl.alt)
            state.setShowHint(false)
        }
    }

    useEffect(() => {
        state.showHint ? hintExecute() : null
    }, [state.showHint]);

    return (
        <>
            <img ref={imgRef} src={img} width={60} height={40} className={`absolute ${state.showHint & state.targetItems[`level${state.level}`].map(i => i.file).includes(getFilename(img)) ? "border-4 border-red-700" : ""}`} alt={getFilename(img)} style={{ left: `${left}%`, top: `${top}%`, visibility: "visible", opacity: 1, transition: "opacity 250ms ease-in, visibility 0ms ease-in 250ms" }} onClick={(e) => removeItem(e, img)} loading="lazy" />
        </>
    );
}

export default HiddenObject;