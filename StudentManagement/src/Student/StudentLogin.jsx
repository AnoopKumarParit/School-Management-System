import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import NavBar from '../NavBar'
import Footer from '../Footer'


function StudentLogin() {
    let navigate=useNavigate();
    let [state,setState]=useState({
            email:"",
            password:""
        })
    // let handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(state);
       
    //     let x=fetch(`http://localhost:8080/login?email=${state.email}&password=${state.password}`,{
    //         method:"POST",
    //         //for sending parameter body we use headers
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify(state)
    //     })
    //     console.log(x);
    //     x.then((Response)=>{
    //         console.log(Response);
    //         return Response.json()
    //     }).then((result)=>{
    //         console.log(result);
    //         localStorage.clear
    //         localStorage.setItem("id",result.data.id)
    //         localStorage.setItem("fname",result.data.fname)
    //         localStorage.setItem("lname",result.data.lname)
    //         localStorage.setItem("email",result.data.email)
    //         localStorage.setItem("password",result.data.password)
    //         localStorage.setItem("address",result.data.address)
    //         localStorage.setItem("mobileNumber",result.data.mobileNumber)
    //     })
    //     navigate('/')
    // }
    
    let handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            console.log(state);
            let x=await axios.post(`http://localhost:8080/login?email=${state.email}&password=${state.password}`,state)
            console.log(x);
            let result=x.data
            localStorage.clear()
            localStorage.setItem("id",result.data.id)
            localStorage.setItem("fname",result.data.fname)
            localStorage.setItem("lname",result.data.lname)
            localStorage.setItem("email",result.data.email)
            localStorage.setItem("password",result.data.password)
            localStorage.setItem("address",result.data.address)
            localStorage.setItem("mobileNumber",result.data.mobileNumber)
  
        }
        catch(err){
            console.log(err);  
        }
        navigate('/')
    }

  return (
    <div>
        <NavBar></NavBar>
        <form action="" onSubmit={(e)=>{handleSubmit(e)}} className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-2xl p-6 space-y-4">
            <input required value={state.email} type="email" name="email" className='w-[300px] mt-[10px] rounded text-2xl p-[10px]  border-3' onChange={e=>(setState({...state,[e.target.name]:e.target.value}))} placeholder='Enter email' />
            <input required value={state.password} type="password" name="password"  className='w-[300px] mt-[10px] rounded text-2xl p-[10px]  border-3' onChange={e=>(setState({...state,[e.target.name]:e.target.value}))} placeholder='Enter password' />  
            <button className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-2xl p-6 space-y-4">Login</button>
        </form>
        <Footer></Footer>
    </div>
  )
}

export default StudentLogin