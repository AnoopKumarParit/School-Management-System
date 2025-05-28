import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar'
import Footer from '../Footer'

const AdminUpdate = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    id: localStorage.getItem("aid") || "",
    fname: localStorage.getItem("fname") || "",
    lname: localStorage.getItem("lname") || "",
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    address: localStorage.getItem("address") || "",
    mobileNumber: localStorage.getItem("phoneNumber") || "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/updateAdminByid/${state.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.clear();
        const { aid, fname, lname, email, address, mobileNumber } = result.data;
        localStorage.setItem("aid", aid);
        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
        localStorage.setItem("email", email);
        localStorage.setItem("address", address);
        localStorage.setItem("phoneNumber", mobileNumber);

        alert(result.msg || "Profile updated successfully!");
        navigate('/adminDetails');
      } else {
        alert(result.msg || "Update failed. Please try again.");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531746790731-6c087fecd65a")' }}
    >
        <NavBar></NavBar>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 space-y-5 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">Update Student Info</h2>

        <input
          readOnly
          value={state.aid}
          name="aid"
          className="w-full p-3 border rounded bg-gray-100"
        />

        <input
          required
          value={state.fname}
          type="text"
          name="fname"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          placeholder="First Name"
        />

        <input
          required
          value={state.lname}
          type="text"
          name="lname"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          placeholder="Last Name"
        />

        <input
          required
          value={state.email}
          type="email"
          name="email"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          placeholder="Email"
        />

        <input
          required
          value={state.password}
          type="password"
          name="password"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          placeholder="Password"
        />

        <input
          required
          value={state.address}
          type="text"
          name="address"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          placeholder="Address"
        />

        <input
          required
          value={state.mobileNumber}
          type="text"
          name="mobileNumber"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          placeholder="Mobile Number"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default AdminUpdate;
