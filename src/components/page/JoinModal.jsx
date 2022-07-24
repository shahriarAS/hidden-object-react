import { GrClose } from "react-icons/gr";

function JoinModal({ openJoinModal, setOpenJoinModal }) {

    const closeModalOnShadowClick = (e) => {
        if (e.target.id == "overlay") {
            setOpenJoinModal(false)
        }
    }

    return (
        <div id="overlay" className={`fixed transition-all duration-700 w-full h-screen inset-0 ${openJoinModal ? "inset-0" : "left-[100%]"} bg-gray-800/50 flex items-center justify-center`} onClick={(e) => closeModalOnShadowClick(e)}>
            <div className="relative host-game rounded-lg w-1/2 h-96 flex items-center justify-center text-[#424242] text-5xl bg-gradient-to-r from-[#84fab0] to-[#8fd3f4]">
                <h1>Join Game</h1>
                <div className="absolute right-4 top-1 w-6 cursor-pointer" onClick={() => setOpenJoinModal(false)}>
                    <GrClose className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default JoinModal;