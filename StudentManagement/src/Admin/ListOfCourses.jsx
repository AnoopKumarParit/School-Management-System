import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import NavBar from '../NavBar'
import Footer from '../Footer'


function ListOfCourses() {
  const [courses, setCourses] = useState([]);
  const [state, setState] = useState({
    name: '',
    duration: '',
    cost: ''
  });

  useEffect(() => {
    fetchCourses();
  }, []);


  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/getAllCourse");
      setCourses(res.data.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch courses");
    }
  };

  const deleteCourse = async (cid) => {
    try {
      await axios.delete(`http://localhost:8080/deleteCourse/${cid}`);
      toast.success("Course deleted successfully!");
      fetchCourses();
    } catch (err) {
      console.error(err);
      fetchCourses();
      toast.error("Failed to delete course");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = [{
      name: state.name.trim(),
      duration: state.duration.trim(),
      cost: parseFloat(state.cost)
    }];

    try {
      await axios.post("http://localhost:8080/saveCourse", payload);
      toast.success("Course created successfully!");
      setState({ name: '', duration: '', cost: '' });
      fetchCourses();
    } catch (err) {
      console.error("AxiosError:", err.response?.data);
      toast.error(err.response?.data?.message || "Failed to create course.");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1740&q=80")' }}>
      <ToastContainer position="top-right" autoClose={3000} />
    <NavBar></NavBar>
      <div className="bg-black bg-opacity-50 text-white text-4xl font-bold text-center py-8">
        List of Courses
      </div>

      <div className="flex flex-wrap gap-8 justify-center p-10">
        {courses.map(({ cid, name, cost, duration }) => (
          <motion.div
            key={cid}
            className="bg-white rounded-2xl shadow-lg p-6 w-80 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xl font-semibold mb-2">{name}</p>
            <p className="text-gray-700 mb-2">Cost: ${cost}</p>
            <p className="text-gray-700 mb-4">Duration: {duration}</p>
            <button
              onClick={() => deleteCourse(cid)}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded transition"
            >
              Delete
            </button>
          </motion.div>
        ))}
      </div>

      <div className="bg-black bg-opacity-50 text-white text-4xl font-bold text-center py-8">
        Create a Course
      </div>

      <form className="max-w-xl mx-auto bg-white bg-opacity-90 p-10 rounded-xl shadow-md mt-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          className="block w-full mb-4 p-3 border rounded"
          onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
          value={state.name}
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          className="block w-full mb-4 p-3 border rounded"
          onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
          value={state.duration}
          required
        />
        <input
          type="number"
          name="cost"
          placeholder="Cost"
          className="block w-full mb-4 p-3 border rounded"
          onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
          value={state.cost}
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded w-full"
        >
          Submit
        </button>
      </form>
      <Footer></Footer>
    </div>
  );
}

export default ListOfCourses;
