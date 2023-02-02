import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <>{user ?
                            <>
                                <li><Link to={'/products'}>Products</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                            </>
                            : <>
                                <li><Link to={'/products'}>Products</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                            </>}
                        </>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Mobile Workshop!</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <>{user ?
                        <>
                            <li><Link to={'/products'}>Products</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={'/dashboard'}>Dashboard</Link></li>
                        </>
                        : <>
                            <li><Link to={'/products'}>Products</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                        </>}
                    </>

                </ul>

            </div>
            <div className="navbar-end lg:flex">
                <ul className="menu menu-horizontal items-center	 p-0">

                    <li>{user ?
                        <button className='btn text-white rounded-xl' onClick={logOut}>Logout</button>
                        :
                        <>
                            <button className='btn rounded-xl'  ><Link className='text-white' to='/login'>Login</Link></button>
                            <button className='btn rounded-xl'  ><Link className='text-white' to='/register'>Register</Link></button>
                        </>
                    }</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;