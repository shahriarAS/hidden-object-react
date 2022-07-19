import { Link } from "react-router-dom";
import profileImg from "../../assets/images/Page/Homepage/5.png";
import rateImg from "../../assets/images/Page/Homepage/64.png";
import aboutImg from "../../assets/images/Page/Homepage/66.png";
import homeImg from "../../assets/images/Page/Homepage/67.png";

function Navbar() {
    return (
        <div className="navbar w-full h-16 flex justify-between items-center bg-[#9B00F3] text-white px-2 py-4">
            <div className="left-nav flex justify-between items-center">
                {/* <div className="nav-item flex items-center justify-between gap-2">
                    <img src={exitImg} alt="Exit Image" className='w-6' />
                    <p className='font-bold text-3xl'>Exit</p>
                </div> */}
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
    );
}

export default Navbar;