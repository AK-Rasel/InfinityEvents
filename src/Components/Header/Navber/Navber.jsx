import { Link, NavLink } from "react-router-dom";


const Navber = () => {
    const NavLinks = <>
        <li ><NavLink to="/">Home</NavLink></li>
        <li><NavLink>Servises</NavLink></li>
        <li><NavLink>Abouts Us</NavLink></li>
        

    </>
    return (
        <div className="navbar bg-rose-700">
            <div className="navbar-start">
                <div  className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm gap-5 dropdown-content mt-3 z-[1] p-8 shadow bg-base-100 rounded-box w-[50vh] ">
                        {NavLinks}
                    </ul>
                </div>
                <Link className="btn bg-rose-700 border-none normal-case text-xl"> Infinity<span className="text-white">Events</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-5 menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end gap-6 px-4">
                <Link className="font-semibold text-white">Login</Link>
                <Link className="font-semibold text-white">Register</Link>
            </div>
        </div>
    );
};

export default Navber;