import getFilename from "../../utils/getFilename";

function HiddenObject({ img, top, left, removeItem }) {
    return (
        <img src={img} width={60} height={40} className="absolute transition-all delay-200 border-2" alt={getFilename(img)} style={{ left: `${left}%`, top: `${top}%` }} onClick={() => removeItem(img)} />
    );
}

export default HiddenObject;