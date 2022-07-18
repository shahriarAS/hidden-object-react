import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerBG from "../assets/images/Page/Homepage/17.png";
import multiplayerImg from "../assets/images/Page/Homepage/24.png";
import singleplayerImg from "../assets/images/Page/Homepage/27.png";
import profileImg from "../assets/images/Page/Homepage/5.png";
import rateImg from "../assets/images/Page/Homepage/64.png";
import aboutImg from "../assets/images/Page/Homepage/66.png";
import homeImg from "../assets/images/Page/Homepage/67.png";
import cardBG from "../assets/images/Page/Homepage/69.png";
import exitImg from "../assets/images/Page/Homepage/70.png";
import settingImg from "../assets/images/Page/Homepage/setting-card.png";
import useStore from '../store';

function HomePage() {
    const state = useStore((state) => state)

    useEffect(() => {
        state.resetState()
    }, []);
    return (
        <div className='w-full h-screen flex flex-col items-center font-bubblegum'>
            <div className="navbar w-full h-16 flex justify-between items-center bg-[#9B00F3] text-white px-2 py-4">
                <div className="left-nav flex justify-between items-center">
                    <div className="nav-item flex items-center justify-between gap-2">
                        <img src={exitImg} alt="Exit Image" className='w-6' />
                        <p className='font-bold text-3xl'>Exit</p>
                    </div>
                </div>
                <div className="right-nav flex justify-between items-center gap-8 font-bold text-2xl">
                    <Link to="/">
                        <div className="nav-item flex items-center justify-between gap-1">
                            <p className=''>Home</p>
                            <img src={homeImg} alt="Exit Image" className='w-8' />
                        </div>
                    </Link>
                    <div className="nav-item flex items-center justify-between gap-1">
                        <p className=''>About Us</p>
                        <img src={aboutImg} alt="Exit Image" className='w-8' />
                    </div>
                    <div className="nav-item flex items-center justify-between gap-1">
                        <p className=''>Rate</p>
                        <img src={rateImg} alt="Exit Image" className='w-8' />
                    </div>
                    <div className="nav-item flex items-center justify-between gap-1">
                        <p className=''>Profile</p>
                        <img src={profileImg} alt="Exit Image" className='w-8' />
                    </div>
                </div>
            </div>
            <div className="home-banner w-full min-h-[350px] bg-cover bg-center" style={{ backgroundImage: `url(${bannerBG})` }}>
                <div className="banner-inner w-full h-full flex items-center justify-center text-white bg-gradient-to-b from-[#a31cf1]/70 to-[#cf7bff]/40">
                    <h1 className="banner-title text-9xl drop-shadow-2xl">Find Where I Am</h1>
                    {/* <img src={binoImg} alt="Find Where I Am" className='w-32' /> */}
                </div>
            </div>
            <div className="home-cards w-full p-8 bg-cover bg-center grid grid-cols-3 gap-12 justify-center items-center bg-blend-lighten bg-white/40" style={{ backgroundImage: `url(${cardBG})` }}>
                <div className="game-card h-60 border-4 border-[#069CCE] rounded-md bg-cover flex items-end justify-center" style={{ backgroundImage: `url(${settingImg})` }}>
                    <h1 className="card-title w-full bg-[#069CCE] text-white px-4 py-1 text-4xl font-bold text-center">
                        Game Settings
                    </h1>
                </div>
                <Link to="/play">
                    <div className="game-card h-60 border-4 border-[#FF8500] rounded-md bg-cover flex items-end justify-center" style={{ backgroundImage: `url(${singleplayerImg})` }}>
                        <h1 className="card-title w-full bg-[#FF8500] text-white px-4 py-1 text-4xl font-bold text-center">
                            Singleplayer
                        </h1>
                    </div>
                </Link>
                <div className="game-card h-60 border-4 border-[#D10203] rounded-md bg-cover flex items-end justify-center" style={{ backgroundImage: `url(${multiplayerImg})` }}>
                    <h1 className="card-title w-full bg-[#D10203] text-white px-4 py-1 text-4xl font-bold text-center">
                        Multiplayer
                    </h1>
                </div>
            </div>
        </div>
        // <div className="text-white text-center w-full">
        //     <h1 className="text-6xl mb-8">Hidden Object Find!</h1>
        //     <div className="flex gap-4 items-center justify-center">
        //         <Link to="/play">
        //             <button type="button" className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-8 py-2 mb-2 text-xl">Play</button>
        //         </Link>
        //     </div>
        // </div>
    );
}

export default HomePage;