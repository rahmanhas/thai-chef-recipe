import React, { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

import { MdFoodBank } from "react-icons/md";
import ImageWithToolTip from './Cards/ImageWithToolTip';
import ImageHoverName from './Cards/ImageWithToolTip';

const Header = () => {
    //delete this line
    //const user = 1; 
    const { user, logOut } = useContext(AuthContext);
   
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'
    const handleUserName = () => {

    }
    const handleLogOut = () => {
        logOut()
            .then(navigate(from))
            .catch(error => console.log(error.message))
    }
    return (
        <div className=''>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                            <li>
                                <NavLink to={`/`} className={({ isActive }) => isActive ? "bg-green-700 text-lg text-white" : ""}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/blog`} className={({ isActive }) => isActive ? "bg-green-700 text-lg text-white" : ""}>Blog</NavLink>
                            </li>
                        </ul>
                    </div>

                    <Link className=' text-lg lg:text-4xl font-bold text-green-700' to="/">Thai Chef's Recipe Hunter</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to={`/`} className={({ isActive }) => isActive ? "bg-green-700 text-lg text-white" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/blog`} className={({ isActive }) => isActive ? "bg-green-700 text-lg text-white" : ""}>Blog</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <ImageHoverName
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    title={user.displayName}
                                    style={{ maxWidth: "100%"}}
                                />
                                <button className='btn btn-primary bg-green-700 hover:bg-green-900 border-0' onClick={handleLogOut}>Log Out</button>
                            </> :

                            <Link className='btn btn-primary bg-green-700 hover:bg-green-900 border-0' to="/login">Log in</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;