import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../NavBar'
import Footer from '../Footer'


function AdminDetails() {
    const navigate = useNavigate();

    const lid = localStorage.getItem("aid");
    const lfname = localStorage.getItem("fname");
    const llname = localStorage.getItem("lname");
    const lemail = localStorage.getItem("email");
    const laddress = localStorage.getItem("address");
    const lpassword = localStorage.getItem("password");
    const lphoneNumber = localStorage.getItem("phoneNumber");

    useEffect(() => {
        fetchImage();
    }, []);

    const handleDelete = () => {
        fetch(`http://localhost:8080/deleteAdminByid/${lid}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(result => {
                toast.success(result.msg || "Admin deleted successfully!");
                localStorage.clear();
                setTimeout(() => navigate('/'), 1500);
            })
            .catch(error => {
                console.error("Delete failed", error);
                toast.error("Failed to delete admin");
            });
    };

    const uploadImage = () => {
        const fileInput = document.getElementById("myimage");
        const img = fileInput.files[0];
        if (!img) {
            toast.warn("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", img);

        fetch(`http://localhost:8080/uploadAdminImageById/${lid}`, {
            method: "PUT",
            body: formData
        })
            .then(() => {
                toast.success("Image uploaded successfully");
                fetchImage();
            })
            .catch(err => {
                console.error("Image upload failed", err);
                toast.error("Image upload failed");
            });
    };

    const fetchImage = () => {
        fetch(`http://localhost:8080/getAdminImageById/${lid}`)
            .then(response => response.blob())
            .then(blob => {
                const img = document.getElementById("image1");
                img.src = URL.createObjectURL(blob);
            });
    };

    return (
        <>
        <NavBar></NavBar>
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 p-6"
        >
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Admin Details</h2>

            <div className="flex justify-center mb-4">
                <img id="image1" height={200} width={400} className="rounded-lg shadow-md" alt="Admin" />
            </div>

            <div className="flex justify-center mb-6">
                <input type="file" id="myimage" name="image" className="mr-4" />
                <button
                    onClick={uploadImage}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Upload Image
                </button>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <tbody>
                        {[
                            { label: "ID", value: lid },
                            { label: "First Name", value: lfname },
                            { label: "Last Name", value: llname },
                            { label: "Email", value: lemail },
                            { label: "Password", value: lpassword },
                            { label: "Address", value: laddress },
                            { label: "Phone Number", value: lphoneNumber },
                        ].map((item, index) => (
                            <tr key={index} className="border-b">
                                <th className="px-4 py-2 bg-gray-100 w-1/3">{item.label}</th>
                                <td className="px-4 py-2">{item.value}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2} className="px-4 py-4 text-center">
                                <button
                                    onClick={() => navigate('/adminUpdate')}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition mx-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mx-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </motion.div>
        <Footer></Footer>
        </>
    );
}

export default AdminDetails;
