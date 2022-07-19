import { FaLock, FaRegEnvelope, FaRegEye, FaRegEyeSlash, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import globeImg from "../assets/images/Page/Register/globe.png";
import registerImg from "../assets/images/Page/Register/sideImage.png";

function Register() {
    return (
        <div className="register-page h-full max-h-[800px] flex font-bubblegum text-[#424242] uppercase">
            <div className="register-form relative flex-1 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-gray-200">
                <img src={globeImg} alt="Globe" className="absolute w-64 bottom-0 -left-40" />
                <div className="register-area w-1/2 h-full py-6 m-auto flex flex-col items-center">
                    <h1 className="register-title text-7xl self-start">Sign Up</h1>

                    <form className="register-form flex flex-col gap-4 mt-8 text-[#A900FD]">
                        <div className="register-div">
                            <p className="register-input bg-transparent-label text-md ml-2">
                                Username
                            </p>
                            <div className="register-box border-2 border-[#424242] rounded-2xl px-2 py-1 flex items-center justify-between">
                                <div className="register-icon text-3xl">
                                    <FaUserCircle />
                                </div>
                                <div className="register-input text-xl mx-2">
                                    <input type="text" className="w-full bg-transparent" />
                                </div>
                            </div>
                        </div>
                        <div className="register-div">
                            <p className="register-input bg-transparent-label text-md ml-2">
                                User Email
                            </p>
                            <div className="register-box border-2 border-[#424242] rounded-2xl px-2 py-1 flex items-center justify-between">
                                <div className="register-icon text-3xl">
                                    <FaRegEnvelope />
                                </div>
                                <div className="register-input text-xl mx-2">
                                    <input type="text" className="w-full bg-transparent" />
                                </div>
                            </div>
                        </div>
                        <div className="register-div">
                            <p className="register-input bg-transparent-label text-md ml-2">
                                Password
                            </p>
                            <div className="register-box border-2 border-[#424242] rounded-2xl px-2 py-1 flex items-center justify-between">
                                <div className="register-icon text-3xl">
                                    <FaLock />
                                </div>
                                <div className="register-input text-xl mx-2">
                                    <input type="text" className="w-full bg-transparent" />
                                </div>
                                <div className="register-icon text-xl">
                                    <FaRegEye />
                                </div>
                            </div>
                        </div>
                        <div className="register-div">
                            <p className="register-input bg-transparent-label text-md ml-2">
                                Confirm Password
                            </p>
                            <div className="register-box border-2 border-[#424242] rounded-2xl px-2 py-1 flex items-center justify-between">
                                <div className="register-icon text-3xl">
                                    <FaLock />
                                </div>
                                <div className="register-input text-xl mx-2">
                                    <input type="text" className="w-full bg-transparent" />
                                </div>
                                <div className="register-icon text-xl">
                                    <FaRegEyeSlash />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="register-btn mt-8 px-12 py-2 bg-[#A900FD] text-white text-2xl rounded-3xl drop-shadow-2xl">
                        Sign Up
                    </div>
                    <div className="register-tag mt-8">
                        <p>Already have an account? <Link to="/login" className="text-[#A900FD]">Sign In</Link></p>
                    </div>
                </div>
            </div>
            <div className="register-side flex-1 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${registerImg})` }}>

            </div>
        </div>
    );
}

export default Register;