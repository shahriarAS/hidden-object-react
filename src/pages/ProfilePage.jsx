
import globeImg from "../assets/images/Page/Common/globe.png";
import registerImg from "../assets/images/Page/Common/sideImage.png";
import UpdateForm from "../components/page/UpdateForm";

function ProfilePage() {

    return (
        <div className="register-page h-full max-h-[800px] flex font-bubblegum text-[#424242] uppercase">
            <div className="register-form relative flex-1 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-gray-200">
                <img src={globeImg} alt="Globe" className="absolute w-64 bottom-0 -left-40" />
                <div className="register-area w-1/2 h-full py-6 m-auto flex flex-col items-center">
                    <h1 className="register-title text-7xl self-start">Profile</h1>
                    <UpdateForm />
                </div>
            </div>
            <div className="register-side flex-1 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${registerImg})` }}>

            </div>
        </div>
    );
}

export default ProfilePage;