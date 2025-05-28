import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../NavBar'
import Footer from '../Footer'


function MyCourses() {
    let id=localStorage.getItem("id")
    let [courses,setCourses]=useState([])
    const fetchCourses=async()=>{
        try{
            let x=await axios.get(`http://localhost:8080/fetchCourses/${id}`)
            console.log(x);
            setCourses(x.data.data)
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
            fetchCourses()
    },[])
    
    const deleteCourse=async(cid)=>{
    try{
        let x=await axios.put(`http://localhost:8080/removeCourseToStudent/${id}/${cid}`)
        console.log(x);
        setCourses(x.data.msg)
        setCourses(courses.filter((obj)=>{
            return obj.cid != id
        }))
    }
    catch(err){
        console.log(err);
    }
    }

  return (
    <div>
        <NavBar></NavBar>
        <div className='flex justify-around h-[100px] p-[20px] bg-slate-400 text-white text-3xl'>
            <NavLink to='/'><img src="hud" alt="logo" /></NavLink>
            <ul>
                <li>My Courses</li>
            </ul>
        </div>
        <div className='flex gap-8'>
             {courses.map(({cid,name,cost,duration},index)=>{
                return(
                    <div key={index} className=' p-[20px] text-center rounded-2x1 max-w-md mt-10 bg-white shadow-xl space-y-4'>
                        <p className='text-2x1 p-[20px]'>{name}</p>
                        <p className='text-2x1 p-[20px]'>${cost}</p>
                        <p className='text-2x1 p-[20px]'>{duration}</p>
                        <button onClick={()=>{deleteCourse(cid)}} className='border p-[10px] rounded-2x1'>Remove Course</button>
                    </div>
                )
            })}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default MyCourses