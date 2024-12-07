import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import GoogleLogin from "../components/GoogleLogin/GoogleLogin";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser , setUser , setProfile} = useContext(AuthContext) ;

    const navigate = useNavigate() ;
    
    const handleSubmit = (e) => {
        e.preventDefault()
       const form = new FormData(e.target) ; 
       const email = form.get("email") ;
       const password = form.get("password") ;
       const photo = form.get("photo") ;
       const name = form.get("name") ;

       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

       if(passwordRegex.test(password)){
        createUser(email, password)
        .then(res => {(res.user?
            toast.success("Register successful") :
            toast.error("Something went wrong")
         );
           setProfile({ displayName: name, photoURL: photo })
           navigate("/");
           setUser(res.user) ;
        })
        .catch(err => console.log(err.message))
       }

       else {
        toast.error("Password must be at least 6 characters, including an uppercase and lowercase character")
    }
    ;

       e.target.reset() ;
    }

    return (
        <div className="font-poppins my-12">
                <div className="flex justify-center items-center">
                    <div className="card bg-base-100 w-11/12 lg:w-full max-w-md shrink-0 shadow-xl shadow-blue-100">
                        <form onSubmit={handleSubmit} className="card-body bg-stone-200 rounded-2xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="URL" name="photo" className="input input-bordered" required />
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-sky-700 hover:bg-sky-800/70 text-white ">SignUp</button>
                            </div>
                            <div className="divider divider-info">or</div>
                            <div className="">
                                <GoogleLogin></GoogleLogin>
                            </div>
                            <div className="mt-6">
                                <p>Already have an Account? <Link to="/login" className="text-sky-700 font-semibold">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Register;