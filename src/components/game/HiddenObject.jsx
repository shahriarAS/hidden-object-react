import getFilename from "../../utils/getFilename";

function HiddenObject({ img, top, left, removeItem }) {
    return (
        <img src={img} width={60} height={40} className="absolute" alt={getFilename(img)} style={{ left: `${left}%`, top: `${top}%`, visibility: "visible", opacity: 1, transition: "opacity 250ms ease-in, visibility 0ms ease-in 250ms" }} onClick={(e) => removeItem(e, img)} />
    );
}

export default HiddenObject;