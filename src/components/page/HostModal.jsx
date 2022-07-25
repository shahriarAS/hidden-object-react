import { useState } from "react";
import toast from "react-hot-toast";
import { GrClose } from "react-icons/gr";
import generateRandom from "../../utils/generateRandom";

function HostModal({ openHostModal, setOpenHostModal }) {
    const [gameCode, setGameCode] = useState(generateRandom())

    const copyGameCodeOnClick = () => {
        navigator.clipboard.writeText(gameCode)
        toast("Copied", {
            duration: 1000,
        })
    }

    const closeModalOnShadowClick = (e) => {
        if (e.target.id == "overlay") {
            setOpenHostModal(false)
        }
    }

    return (
        <div id="overlay" className={`fixed transition-all duration-700 w-full h-screen inset-0 ${openHostModal ? "inset-0" : "-left-[100%]"} bg-gray-800/50 flex items-center justify-center`} onClick={(e) => closeModalOnShadowClick(e)}>
            <div className="relative host-game rounded-lg w-96 h-56 flex items-center justify-center text-[#424242] text-5xl bg-gradient-to-r from-[#84fab0] to-[#8fd3f4]">
                <div className="absolute right-4 top-1 w-6 cursor-pointer" onClick={() => setOpenHostModal(false)}>
                    <GrClose className="w-full" />
                </div>

                <div className="w-full flex flex-col items-center justify-center text-xl">
                    <div className="register-div flex items-center justify-center rounded border border-[#424242]">
                        {/* <p className="register-input bg-transparent-label text-md ml-2">
                            Game ID :
                        </p> */}
                        <p className="register-input bg-transparent-label text-md p-1 px-6 border-r border-[#424242]">
                            {gameCode}
                        </p>
                        <p className="register-input bg-transparent-label text-md p-1 px-2 cursor-default bg-[#424242] text-white" onClick={copyGameCodeOnClick}>
                            Copy
                        </p>
                    </div>
                    <button type="submit" className="register-btn mt-4 px-12 py-2 bg-[#A900FD] text-white text-2xl rounded-3xl drop-shadow-2xl">
                        Host
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HostModal;