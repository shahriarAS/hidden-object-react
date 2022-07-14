import bgImage from "../assets/images/background.jpg";
import GameArea from "../components/game/GameArea";
import GameStat from "../components/game/GameStat";
import GameTargetItems from "../components/game/GameTargetItems";

function GameScreen() {
    const items = ["apple", "clock", "tablelamp", "laptop", "img2", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"]
    const targetItems = items.slice(2, 7)
    return (
        <>
            <div className="game-screen h-screen w-full flex flex-col">
                <div className="game-controls h-20 w-full bg-green-300 flex justify-between items-center px-12">
                    <GameStat />
                </div>
                <div className="game-area h-full w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
                    <GameArea items={items} targetItems={targetItems}/>
                </div>
                <div className="game-items h-28 w-full bg-gray-300 px-12 flex items-center justify-center">
                    <GameTargetItems targetItems={targetItems}/>
                </div>
            </div>
        </>
    );
}

export default GameScreen;