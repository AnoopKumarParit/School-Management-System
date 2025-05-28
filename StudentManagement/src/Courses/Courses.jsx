import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar'
import Footer from '../Footer'


function Courses() {
  const lid = localStorage.getItem("id");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addingCourseId, setAddingCourseId] = useState(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/getAllCourse");
      setCourses(response.data.data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
      alert("Unable to load courses. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAddedCourses = async (cid) => {
    setAddingCourseId(cid);
    try {
      const response = await axios.get(`http://localhost:8080/fetchCourses/${lid}`);
      const isAlreadyAdded = response.data.data.some((course) => course.cid === cid);

      if (isAlreadyAdded) {
        alert("This course is already added.");
      } else {
        await addCourse(cid);
      }
    } catch (err) {
      console.error("Error checking added courses:", err);
      alert("Something went wrong while checking course status.");
    } finally {
      setAddingCourseId(null);
    }
  };

  const addCourse = async (cid) => {
    try {
      const response = await axios.put(`http://localhost:8080/addCourseToStudent?id=${lid}&cid=${cid}`);
      alert(response.data.msg || "Course added successfully!");
    } catch (err) {
      console.error("Error adding course:", err);
      alert("Failed to add course. Please try again.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar></NavBar>
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-blue-600 text-white">
        <NavLink to="/">
          <h1 className="text-2xl font-bold">MyCourses</h1>
        </NavLink>
        <span className="text-xl">Available Courses</span>
      </header>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-10 text-lg font-medium text-gray-600">Loading courses...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {courses.map(({ cid, name, cost, duration }) => (
            <div
              key={cid}
              className="bg-white shadow-md rounded-lg p-6 text-center space-y-4 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-gray-700">💰 Cost: ${cost}</p>
              <p className="text-gray-700">⏳ Duration: {duration}</p>
              <button
                onClick={() => fetchAddedCourses(cid)}
                disabled={addingCourseId === cid}
                className={`w-full py-2 rounded-lg text-white ${
                  addingCourseId === cid ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                } transition`}
              >
                {addingCourseId === cid ? "Adding..." : "Add Course"}
              </button>
            </div>
          ))}
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}

export default Courses;
