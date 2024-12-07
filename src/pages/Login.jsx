import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import GoogleLogin from "../components/GoogleLogin/GoogleLogin";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const { signInUser, resetPassword, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        signInUser(email, password)
            .then(res => {
                setUser(res.user);
                toast.success("Successfully Logged In");
                navigate("/");
            })
            .catch(err => toast.error(err.code))
        e.target.reset()
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (email === "") {
            toast("please enter your mail first")
        }

        else {
            resetPassword(email);
            toast("If the email is correct , a mail has been sent")

        }
    }

    return (
        <div className="font-poppins my-12 min-h-[60vh]">
            <div className="flex justify-center items-center">
                <div className="card bg-base-100 w-11/12 md:w-full max-w-md shrink-0 shadow-xl shadow-blue-100">
                    <form onSubmit={handleSubmit} className="card-body bg-stone-200 rounded-2xl">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" ref={emailRef}
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                            <div onClick={() => setShowPassword(!showPassword)}
                                className="btn-xs text-lg text-opacity-30 absolute right-7 top-12">
                                {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                            </div>
                            <label onClick={handleForgetPassword} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-sky-700 hover:bg-sky-800/70 text-white ">Login</button>
                        </div>
                        <div className="divider divider-info">or</div>
                        <div>
                            <GoogleLogin></GoogleLogin>
                        </div>
                        <div className="mt-6">
                            <p>Don&apos;t have an Account? <Link to="/register" className="text-sky-700 font-semibold">Register Now</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;