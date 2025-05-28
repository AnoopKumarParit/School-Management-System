import React from 'react'
import Body from './Body'
import NavBar from './NavBar'
import Footer from './Footer'
import BgImage from './assets/background.png'; 

function Home(){
  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>    
        <NavBar/>
        <Body></Body>
        <Footer></Footer>
    </div>
  )
}

export default Home