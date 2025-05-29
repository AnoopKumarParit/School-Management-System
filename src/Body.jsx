import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Body() {
  const isLoggedIn = !!localStorage.getItem("fname");


  return ( 
      <div className="text-white text-center pt-32 px-4 bg-red bg-opacity-50 h-full flex-grow">
        <h1 className="text-5xl font-bold mb-6">Welcome to Course Portal</h1>
        <p className="text-xl max-w-3xl mx-auto">This platform allows students and admins to register, login, manage and explore various courses offered.</p>
        {!isLoggedIn && (
          <div className="mt-10 space-x-6">
            <NavLink to="/studentRegister" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl text-white">Student Register</NavLink>
            <NavLink to="/adminRegister" className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl text-white">Admin Register</NavLink>
          </div>
        )}
      </div>
  );
}

export default Body;
