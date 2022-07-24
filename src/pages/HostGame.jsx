import { Link } from "react-router-dom";
import greyMap from "../assets/images/Page/Leaderboard/grey-map.png";

function HostGame() {
    return (
        <div className="multiplayer w-full h-screen font-bubblegum bg-cover bg-blend-overlay bg-gray-900/50 text-[#424242]  uppercase flex flex-col justify-center items-center p-10 py-24" style={{ backgroundImage: `url(${greyMap})` }
        }>
            <div className="leaderboard-table w-full h-80 flex gap-12">
                <Link to="/multiplayer/host" className="host-game transition-all duration-150 cursor-pointer rounded-lg hover:scale-105 h-full w-full flex items-center justify-center text-[#424242] text-5xl bg-gradient-to-r from-[#84fab0] to-[#8fd3f4]">
                    Host Game
                </Link>

                <Link to="/multiplayer/join" className="join-game transition-all duration-150 cursor-pointer rounded-lg hover:scale-105 h-full w-full flex items-center justify-center text-[#424242] text-5xl bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee]">
                    Join Game
                </Link>
            </div>
        </div>
    );
}

export default HostGame;