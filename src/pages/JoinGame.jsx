import greyMap from "../assets/images/Page/Leaderboard/grey-map.png";

function JoinGame() {
    return (
        <div className="min-h-screen w-full font-bubblegum bg-cover bg-blend-overlay bg-white/40 text-[#424242]  uppercase flex flex-col items-center p-10" style={{ backgroundImage: `url(${greyMap})` }
        }>
            <h1 className="leaderboard-title uppercase text-5xl">
                Join Game
            </h1>
            <h1 className="leaderboard-tagline text-lg text-white bg-gray-900 px-2 py-1">The following are the top 50 players in points and rankings.</h1>
            <div className="leaderboard-table w-full"></div>
        </div>
    );
}

export default JoinGame;