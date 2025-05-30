import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../NavBar'
import Footer from '../Footer'


function StudentRegister() {
    let [state,setState]=useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        address:"",
        mobileNumber:""
    })
    // let handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(state);
        
    //     let x=fetch('http://localhost:8080/saveStudent',{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify(state)
    //     })
    //     console.log(x);
    //     x.then((response)=>{
    //         return response.json()
    //     }).then((result)=>{
    //         console.log(result);
    //         alert(result.msg)
    //     })
    // }

    let handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            console.log(state);
            let x=await axios.post("http://localhost:8080/saveStudent",state)
            console.log(x);
            alert(x.data.msg)
            setState({
                 fname:"",
                 lname:"",
                 email:"",
                 password:"",
                 address:"",
                 mobileNumber:""
            })
        }
        catch(err){
            console.log(err);
            
        }
    }

  return(
    <>
    <NavBar></NavBar>
    <div className='flex flex-col p-[10px] m-[auto] w-[300px]'>
        <form action="" onSubmit={(e)=>{handleSubmit(e)}} className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-2xl p-6 space-y-4">
            <input required value={state.fname} type="text" name="fname"  className='w-[300px] mt-[10px] rounded text-2xl p-[10px] border-3' onChange={e=>(setState({...state,[e.target.name]:e.target.value}))} placeholder='Enter fname' />
            <input required value={state.lname} type="text" name="lname"  className='w-[300px] mt-[10px] rounded text-2xl p-[10px] border-3' onChange={e=>(setState({...state,[e.target.name]:e.target.value}))} placeholder='Enter lname'/>
            <input required value={state.email} type="email" name="email" className='w-[300px] mt-[10px] rounded text-2xl p-[10px] border-3' onChange={e=>(setState({...state,[e.target.name]:e.target.value}))} placeholder='Enter email' />
            <input required value={state.password} type="password" name="password"  className='w-[300px] mt-[10px] rounded text-2xl p-[10px] border-3' onChange={e=>(setState({...state,[e.target.name]:e.target.value}))} placeholder='Enter password' />
            <input required value={state.address} type="text" name="address" className='w-[300px] mt-[10px] rounded text-2xl p-[10px] border-3' onChange={e=>(setState({...state,[e.target.name]:e.target.value}))} placeholder='Enter address' />
            <input required value={state.mobileNumber} type="text" name="mobileNumber" className='w-[300px] mt-[10px] rounded text-2xl p-[10px] border-3' onChange={e=>(setState({...state,[e.target.name]:e.target.value}))} placeholder='Enter mobileNumber' />
            <button className="w-[300px] bg-green-600 text-white font-medium py-3.5 rounded-md hover:bg-blue-700 transition-colors ">Submit</button>
        </form>
        <h1 id='pwdErr' className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-2xl p-6 space-y-4 font-medium py-2">OR</h1>
          <form action="" className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-2xl p-6 space-y-4">
              <button onClick={()=>{navigate("/adminLogin")}}   className="w-[300px] bg-orange-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors p-[10px] mt-[20px]">Login</button>
              <button onClick={()=>{navigate("/")}}  className="w-[300px] bg-pink-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors p-[10px]">Home</button>
          </form>
    </div>
    <Footer></Footer>
    </>
  )
}

export default StudentRegister