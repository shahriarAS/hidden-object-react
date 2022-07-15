import { useTimer } from 'react-timer-hook';
import statBG from "../../assets/images/stat-bg.png";
import useStore from "../../store";

const GameTimer = () => {
    const time = new Date();
    const state = useStore((state) => state)

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: time.setSeconds(time.getSeconds() + 4), autoStart: true, onExpire: () => state.setGameOver(true) });

    // useEffect(() => {
    //     if (!isRunning) {
    //         state.setGameOver(true)
    //     }
    // }, [isRunning]);

    return (
        <>
            <div className="control-btn bg-contain bg-no-repeat w-24 h-24 pt-4 flex flex-col items-center text-center text-white font-bubblegum text-xl" style={{ backgroundImage: `url(${statBG})` }}>
                <p>Time:</p>
                <p>{minutes}:{seconds}</p>
            </div>
        </>
    );
};

export default GameTimer