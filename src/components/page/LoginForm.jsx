import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaLock, FaRegEnvelope, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import FormDiv from "../../components/page/FormDiv";
import { auth, db } from "../../config/firebaseConfig";
import useResetState from "../../hooks/useResetState";
import useStore from "../../store";



function LoginForm() {
    const state = useStore((state) => state)
    const resetState = useResetState()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(userCredential)
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
                toast.success("Successfully Logged In.")
                resetState()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                switch (error.code) {
                    case "auth/wrong-password":
                        toast.error("Email or Password Wrong. Try agian.")
                        break;
                    default:
                        toast.error("Email or Password Wrong. Try agian.")
                        break;
                }
                resetState()
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="register-form flex flex-col gap-4 mt-8 text-[#A900FD]">

            <FormDiv label="User Email" icon={<FaRegEnvelope />} error={errors.email?.message}>

                <input {...register("email", {
                    required: "Email is required", pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                        message: "Invalid Email."
                    }
                })} type="email" className="w-full bg-transparent" />

            </FormDiv>

            <FormDiv label="Password" icon={<FaLock />} icon2={<FaRegEye />} error={errors.password?.message}>

                <input {...register("password", { required: "Password is required", minLength: { value: 6, message: "Atleast 6 character long" } })} type="password" className="w-full bg-transparent" />

            </FormDiv>

            <div className="register-hint self-end text-right text-md">
                <Link to="/forget-pass">Forget Password</Link>
            </div>

            <button type="submit" className="register-btn mt-8 px-12 py-2 bg-[#A900FD] text-white text-2xl rounded-3xl drop-shadow-2xl">
                Sign In
            </button>
        </form>
    );
}

export default LoginForm;