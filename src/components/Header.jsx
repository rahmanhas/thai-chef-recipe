import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    //delete this line
    //const user = 1; 
    const {user,logOut} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'

    const handleLogOut =()=>{
        logOut()
        .then(navigate(from))
        .catch(error=>console.log(error.message))
    }
    return (
        <div className='bg-base-200'>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                        <Link className='mr-2' to="/">Home</Link>
                        <Link className='mr-2' to="/blog">Blogs</Link>
                        <Link className='mr-2' to="/">About</Link>
                        </ul>
                    </div>
                    <Link className='text-2xl font-extrabold text-primary' to="/">Chef Recipe Hunter</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link className='mr-2' to="/">Home</Link>
                        <Link className='mr-2' to="/blog">Blogs</Link>
                        <Link className='mr-2' to="/">About</Link>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                        <>
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />;
                            <button className='btn btn-primary'  onClick={handleLogOut}>Log Out</button>
                        </>:
                        
                        <Link className='btn btn-primary' to="/login">Log in</Link>
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;