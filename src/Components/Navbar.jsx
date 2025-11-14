import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';
import { ClockLoader } from 'react-spinners';

const Navbar = () => {
  const { user, signOutUserFunc, setUser,loading, setLoading } = useContext(AuthContext) || {};

  const handleLogout = () => {
    signOutUserFunc()
      .then(() => {
        toast.success("Logout Successfull")
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li><NavLink to='/' className={({ isActive }) => `text-2xl font-bold ${isActive ? 'underline text-blue-600' : 'hover:underline'}`}>Home</NavLink></li>
      <li><NavLink to='/all-propertise' className={({ isActive }) => `text-2xl font-bold ${isActive ? 'underline text-blue-600' : 'hover:underline'}`}>All Propertise</NavLink></li>
      <li><NavLink to='/add-propertise' className={({ isActive }) => `text-2xl font-bold ${isActive ? 'underline text-blue-600' : 'hover:underline'}`}>Add Propertise</NavLink></li>
      <li><NavLink to='/my-property' className={({ isActive }) => `text-2xl font-bold ${isActive ? 'underline text-blue-600' : 'hover:underline'}`}>My Propertise</NavLink></li>
    </>
  )

  console.log(loading)

  return (
    <div className="navbar bg-neutral-300 shadow-sm">
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
        <Link to='/' className="btn btn-ghost text-xl font-bold">Home Nest</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        { loading ? (<ClockLoader />) : user ? (
          <> 
            <div className='flex justify-between items-center gap-2'>
              <span className="font-semibold">{user.displayName || "User"}</span>
            <img src={user?.photoURL || "https://via.placeholder.com/88"} 
            className='border h-[40px] w-[40px] rounded-full mx-auto' alt="" />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold"
            >
              Logout
            </button>
            </div>
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
