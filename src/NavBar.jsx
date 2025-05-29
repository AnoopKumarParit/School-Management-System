import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import MyImage from './assets/image1.png'
import Body from './Body';

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    alert("Logout successful");
    navigate('/');
  };

  const handleProfile = () => {
    if (localStorage.getItem("fname")) {
      navigate("/studentDetails");
    } else {
      alert("Please login first.");
    }
  };

   const handleAdminProfile = () => {
    if (localStorage.getItem("fname")) {
      navigate("/adminDetails");
    } else {
      alert("Please login first.");
    }
  };

  const isLoggedIn = !!localStorage.getItem("fname");

  return (
      <nav className="bg-sky-300 px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={MyImage} alt="logo" className="w-60 h-10" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-20 text-white font-medium text-lg items-center">
            <NavLink to="/" className="hover:text-yellow-300">Home</NavLink>
            {(isLoggedIn && localStorage.getItem('aid')) ?(
              <>
                <button onClick={handleAdminProfile} className="hover:text-yellow-600">Profile</button>
                <NavLink to="/listOfCourses" className="hover:text-yellow-600">Courses</NavLink>
              </>
            ):""}

            {(isLoggedIn && localStorage.getItem('id')) ?(
              <>
                <button onClick={handleProfile} className="hover:text-yellow-600">Profile</button>
                <NavLink to="/courseDetails" className="hover:text-yellow-600">Courses</NavLink>
                <NavLink to="/myCourses" className="hover:text-yellow-600">MyCourses</NavLink>
              </>
            ):""}


            {/* Register dropdown */}
             {!isLoggedIn ? (
            <div className="relative group">
              <button className="hover:text-yellow-300">Register</button>
              <div className="absolute hidden group-hover:flex flex-col bg-white text-gray-800 rounded shadow-md mt-2 animate-fade-in z-10">
                <NavLink to="/adminRegister" className="px-4 py-2 hover:bg-gray-100">Admin Register</NavLink>
                <NavLink to="/studentRegister" className="px-4 py-2 hover:bg-gray-100">Student Register</NavLink>
              </div>
            </div>
            ) : ('')}

            {/* Login/Logout */}
            {!isLoggedIn ? (
              <div className="relative group">
                <button className="hover:text-yellow-300">Login</button>
                <div className="absolute hidden group-hover:flex flex-col bg-pink-300 text-white rounded shadow-md mt-2 animate-fade-in z-10">
                  <NavLink to="/adminLogin" className="px-7 py-2 hover:bg-pink-400 hover:text-amber-50">Admin Login</NavLink>
                  <NavLink to="/studentLogin" className="px-7 py-2 hover:bg-pink-400">Student Login</NavLink>
                </div>
              </div>
            ) : (
              <button onClick={handleLogout} className="hover:text-yellow-300">Logout</button>
            )}
          </ul>
        </div>
      </nav>
  );
}

export default NavBar;
