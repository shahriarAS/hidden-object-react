
function HiddenObject({ img, top, left, onImageClick }) {
    const filename = img.split('/').pop().split(".")[0]
    return (
        <img src={img} width={60} height={40} className="absolute transition-all delay-200" alt={filename} style={{ left: `${left}px`, top: `${top}px` }} onClick={(e) => onImageClick(e, filename)} />
    );
}

export default HiddenObject;