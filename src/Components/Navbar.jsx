import React from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const Navbar = () => {
 

  const links =(
    <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/all-propertise'>All Propertise</NavLink></li>
    <li><NavLink to='/add-propertise'>Add Propertise</NavLink></li>
    <li><NavLink to='/my-propertise'>My Propertise</NavLink></li>
    </>
  )
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Home Nest 10</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>

  <div className="navbar-end gap-2">
        {user ? (
          <>
            <span className="font-semibold">{user.displayName || "User"}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold"
          >
            Login
          </NavLink>
        )}
      </div>

</div>
    );
};

export default Navbar;