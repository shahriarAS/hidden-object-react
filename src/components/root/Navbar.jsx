import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/Page/Homepage/5.png";
import rateImg from "../../assets/images/Page/Homepage/64.png";
import aboutImg from "../../assets/images/Page/Homepage/66.png";
import homeImg from "../../assets/images/Page/Homepage/67.png";
import exitImg from "../../assets/images/Page/Homepage/70.png";
import app from "../../config/firebaseConfig";
import Loading from "./Loading";

function Navbar() {
    const auth = getAuth(app);
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
        toast("Signed Out.")
    }

    return (
        loading ? (<Loading />) : (
            <div className="navbar w-full h-16 flex justify-between items-center bg-[#a60cff] text-white px-2 py-4">
                <div className="left-nav flex justify-between items-center">
                    {/* <div className="nav-item flex items-center justify-between gap-2">
                    <img src={exitImg} alt="Exit Image" className='w-6' />
                    <p className='font-bold text-3xl'>Exit</p>
                </div> */}
                </div>
                <div className="right-nav flex justify-between items-center gap-8 font-bold text-2xl">
                    <Link to="/">
                        <div className="nav-item flex items-center justify-between gap-1">
                            <img src={homeImg} alt="Exit Image" className='w-8' />
                            <p className=''>Home</p>
                        </div>
                    </Link>
                    <div className="nav-item flex items-center justify-between gap-1">
                        <img src={aboutImg} alt="Exit Image" className='w-8' />
                        <p className=''>About Us</p>
                    </div>
                    <div className="nav-item flex items-center justify-between gap-1">
                        <img src={rateImg} alt="Exit Image" className='w-8' />
                        <p className=''>Rate</p>
                    </div>
                    {
                        user ? (
                            <>
                                <Link to="/profile">
                                    <div className="nav-item flex items-center justify-between gap-1">
                                        <img src={user.photoURL} alt="Profile Image" className='w-10 p-1 rounded-full border-2' />
                                        <p className=''>Profile</p>
                                    </div>
                                </Link>
                                <div onClick={logOut} className="nav-item flex items-center justify-between gap-1 cursor-pointer">
                                    <img src={exitImg} alt="Log Out" className="w-4" />
                                    <p className=''>Logout</p>
                                </div>
                            </>
                        ) : (
                            <Link to="/login">
                                <div className="nav-item flex items-center justify-between gap-1 cursor-pointer">
                                    <p className=''>Login</p>
                                    <img src={profileImg} alt="Exit Image" className='w-8' />
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>)
    );
}

export default Navbar;