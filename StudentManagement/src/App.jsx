import './App.css'
import AdminDetails from './Admin/AdminDetails'
import StudentDetails from './Student/StudentDetails'
import AdminUpdate from './Admin/AdminUpdate'
import StudentUpdate from './Student/StudentUpdate'
import StudentRegister from './Student/StudentRegister'
import StudentLogin from './Student/StudentLogin'
import AdminRegister from './Admin/AdminRegister'
import AdminLogin from './Admin/AdminLogin'
import ListOfCourses from './Admin/ListOfCourses'
import Home from './Home'
import Courses from './Courses/Courses'
import MyCourses from './Courses/MyCourses'
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/adminRegister" element={<AdminRegister/>}/>
              <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}/>
              <Route path="/adminDetails" element={<AdminDetails/>}/>
              <Route path="/adminUpdate" element={<AdminUpdate/>}/>
              <Route path="/studentRegister" element={<StudentRegister/>}/>
              <Route path="/studentLogin" element={<StudentLogin/>}/>
              <Route path="/studentUpdate" element={<StudentUpdate/>}/>
              <Route path="/studentDetails" element={<StudentDetails/>}/>
              <Route path="/courseDetails" element={<Courses/>}/>
              <Route path='/myCourses'element={<MyCourses></MyCourses>}></Route>
              <Route path="/listOfCourses" element={<ListOfCourses/>}/>
            </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
