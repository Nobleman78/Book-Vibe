import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedbook">Listed Book</NavLink></li>
        <li><NavLink to="/pagetpread">Page to Read</NavLink></li>



    </>
    return (
        <div className="navbar-container bg-base-100 mt-4 mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BookVive</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="pr-3">
                    <NavLink to="/signin" className="btn btn-primary text-white "> Sign In</NavLink>
                </div>
                <NavLink to="signup" className="btn btn-success text-white">Sign Up</NavLink>
            </div>
        </div>
    );
};

export default Navbar;