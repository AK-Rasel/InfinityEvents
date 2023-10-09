
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../../AuthProvider/AuthProvider";


import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navber = () => {
    const { user, logOut } = useContext(AuthContextProvider)
    const naviget = useNavigate()
    const LogoutEvent = () => {
        logOut()
            .then(() => {
                naviget("/login")
                toast("Log Out Succsses Fully")
            })
            .catch(error => console.error(error))
    }


    const NavLinks = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-rose-700 underline link link-hover" : ""
            }
        >
            Home
        </NavLink></li>
        <hr className="border-gray-300" />
        <li><NavLink
            to="/servises"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-rose-700  underline link link-hover" : ""
            }
        >
            Servises
        </NavLink></li>
        <hr className="border-gray-300" />
        <li><NavLink
            to="/abouts"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-rose-700 underline link link-hover" : ""
            }
        >
            Abouts Us
        </NavLink></li>
    </>
    return (
        <div  className="navbar my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" shadow-lg space-y-1 font-semibold text-lg menu-sm gap-6 dropdown-content mt-3 z-[1] p-8 bg-base-100 rounded-box w-[50vh] ">
                        {NavLinks}
                    </ul>
                </div>
                <Link to="/" className=" font-bold text-3xl bg-white border-none normal-case"> Infinity<span className="text-rose-700">Events</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="font-semibold flex gap-5 menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end gap-6 px-4">
            {
                user && <span className="underline text-rose-400">{user.email}</span>
            }
                {
                    user ? <button className="font-semibold" onClick={LogoutEvent}>Log Out</button> : <>
                    <Link to="/login" className="font-semibold">Login</Link>
                    <Link to="/register" className="font-semibold hidden md:block ">Register</Link>
                    </>
                    
                }

            </div>
        </div>
    );
};

export default Navber;