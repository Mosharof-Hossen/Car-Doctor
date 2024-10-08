import { Link, NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../../../assets/logo.svg"
import { FaBagShopping } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import userImage from "../../../assets/icons/user.png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = <>

        <NavLink to={"/"} className={"  px-2 ml-1 py-2 rounded font-semibold "}><li>Home</li></NavLink>
        <NavLink to={"/services"} className={"  px-2 ml-1 py-2 rounded font-semibold "}><li>Services</li></NavLink>
        {
            user?.email === "admin@admin.com" &&
            <NavLink to={"/manage-inventory"} className={"  px-2 ml-1 py-2 rounded font-semibold "}><li>Manage Inventory</li></NavLink>
        }
        <NavLink to={"/about"} className={"  px-2 ml-1 py-2 rounded font-semibold "}><li>About</li></NavLink>
        <NavLink to={"/blogs"} className={"  px-2 ml-1 py-2 rounded font-semibold "}><li>Blogs</li></NavLink>
        <NavLink to={"/contact"} className={"  px-2 ml-1 py-2 rounded font-semibold "}><li>Contact</li></NavLink>
    </>

    return (
        <div className="navbar bg-base-100">
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
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl">
                    <img src={logo} className="h-full" alt="" />
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4 ">
                <NavLink to={"/order"}><button className="text-2xl "><FaBagShopping /></button></NavLink>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL ? user.photoURL : userImage} />
                    </div>
                </div>
                {
                    user ?
                        <button onClick={() => logOut()} className="text-primary-c border-primary-c border px-3 py-2 rounded">Sign Out</button>

                        :
                        <Link to={'/login'}><button className="text-primary-c border-primary-c border px-3 py-2 rounded">Sign in</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;