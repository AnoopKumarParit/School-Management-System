import React from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("fname");


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

  return (
    <footer className="bg-sky-300 text-white py-6 mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <NavLink to="/" className="hover:text-yellow-300">Home</NavLink>

          {(isLoggedIn && localStorage.getItem('id')) && (
            <>
              <button onClick={handleAdminProfile} className="hover:text-yellow-300">Admin Profile</button>
              <NavLink to="/listOfCourses" className="hover:text-yellow-300">Courses</NavLink>
            </>
          )}

          {(isLoggedIn && localStorage.getItem('aid')) && (
            <>
              <button onClick={handleProfile} className="hover:text-yellow-300">Student Profile</button>
              <NavLink to="/courseDetails" className="hover:text-yellow-300">Courses</NavLink>
              <NavLink to="/myCourses" className="hover:text-yellow-300">My Courses</NavLink>
            </>
          )}

          {!isLoggedIn && (
            <>
              <NavLink to="/adminLogin" className="hover:text-yellow-300">Admin Login</NavLink>
              <NavLink to="/studentLogin" className="hover:text-yellow-300">Student Login</NavLink>
              <NavLink to="/adminRegister" className="hover:text-yellow-300">Admin Register</NavLink>
              <NavLink to="/studentRegister" className="hover:text-yellow-300">Student Register</NavLink>
            </>
          )}

          {isLoggedIn && (
            <button onClick={handleLogout} className="hover:text-yellow-300 col-span-2 md:col-span-1">Logout</button>
          )}
        </div>
        <p className="text-center text-sm mt-6">&copy; {new Date().getFullYear()} Course Portal. All rights reserved.</p>
      </footer>
  )
}

export default Footer