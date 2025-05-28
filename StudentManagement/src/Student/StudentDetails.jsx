import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar'
import Footer from '../Footer'


function StudentDetails() {
  const navigate = useNavigate();

  const lid = localStorage.getItem("id");
  const lfname = localStorage.getItem("fname");
  const llname = localStorage.getItem("lname");
  const lemail = localStorage.getItem("email");
  const laddress = localStorage.getItem("address");
  const lpassword = localStorage.getItem("password");
  const lmobileNumber = localStorage.getItem("mobileNumber");

  useEffect(() => {
    fetchImage();
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:8080/deleteStudent?id=${lid}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(result => {
        alert(result.msg);
        localStorage.clear(); // FIXED
        navigate('/');
      })
      .catch(err => {
        console.error("Error deleting student:", err);
        alert("Failed to delete student");
      });
  };

  const uploadImage = () => {
    const fileInput = document.getElementById("myimage");
    const img = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", img);

    fetch(`http://localhost:8080/uploadImageById/${lid}`, {
      method: "PUT",
      body: formData
    })
      .then(() => {
        alert("Image uploaded successfully");
        fetchImage();
      })
      .catch(err => {
        console.error("Image upload error:", err);
        alert("Image upload failed");
      });
  };

  const fetchImage = () => {
    fetch(`http://localhost:8080/getImageById/${lid}`)
      .then(response => response.blob())
      .then(blob => {
        const imageElement = document.getElementById("image1");
        imageElement.src = URL.createObjectURL(blob);
      })
      .catch(err => console.error("Failed to load image:", err));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531746790731-6c087fecd65a")' }}
    >
      <NavBar></NavBar>
      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Student Details</h2>

        <div className="flex flex-col items-center mb-6">
          <img
            id="image1"
            className="rounded-full h-40 w-40 object-cover shadow-lg border-4 border-blue-500"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div className="mt-4 flex gap-2">
            <input
              type="file"
              id="myimage"
              name="image"
              className="border p-1 rounded bg-white"
            />
            <button
              onClick={uploadImage}
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            >
              Upload
            </button>
          </div>
        </div>

        <table className="w-full text-left table-auto text-lg text-gray-800">
          <tbody>
            <tr><th className="py-2 font-semibold">ID:</th><td>{lid}</td></tr>
            <tr><th className="py-2 font-semibold">First Name:</th><td>{lfname}</td></tr>
            <tr><th className="py-2 font-semibold">Last Name:</th><td>{llname}</td></tr>
            <tr><th className="py-2 font-semibold">Email:</th><td>{lemail}</td></tr>
            <tr><th className="py-2 font-semibold">Password:</th><td>{lpassword}</td></tr>
            <tr><th className="py-2 font-semibold">Address:</th><td>{laddress}</td></tr>
            <tr><th className="py-2 font-semibold">Contact No.:</th><td>{lmobileNumber}</td></tr>
          </tbody>
        </table>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => navigate('/studentUpdate')}
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default StudentDetails;
