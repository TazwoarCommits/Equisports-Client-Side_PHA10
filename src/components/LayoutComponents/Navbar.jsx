// import { Link } from "react-router-dom";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

    const {user , logOut} = useContext(AuthContext) ;  

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/equipments'>All Equipments</NavLink></li>
    {
        user ? <>
            <li><NavLink to='/addEquipment'>Add Equipment</NavLink></li>
            <li><NavLink to='/myEquipments'>My Equipment</NavLink></li>
        </>
            :  <li><NavLink to='/register'>Register</NavLink></li>
    }
</>

    const handleLogOut = () => {
        logOut();
    }
    
    
    return (
         <div className="font-poppins navbar bg-blue-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-xl md:text-3xl"><Link to="/" >EquiSport</Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-2 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex gap-4">
                            <div className="img-container">
                                <img className="w-12 h-12 rounded-[50%] cursor-pointer" src={user.photoURL ? user.photoURL :"https://i.ibb.co.com/3z773GB/avatar.png"} alt="" />
                                <p className="absolute min-w-40 bg-sky-900/80 top-6 right-4 text-lg text-white font-semibold px-4 py-2 rounded-lg hidden"
                                >{user.displayName? user.displayName : user.email.split("@")[0]}</p>
                            </div>
                            <div>
                                <button onClick={handleLogOut} className="btn bg-blue-300 hover:bg-blue-400">Log Out</button>
                            </div>
                        </div>
                        :
                        <Link to="/login" className="btn bg-blue-300  hover:bg-blue-400">Login</Link>
                }
            </div>

        </div>
    );
};

export default Navbar;