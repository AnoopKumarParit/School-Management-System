import Nav from "./component/Nav"
import Main from "./component/Main"
import Footer from "./component/Footer"
import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
import image3 from "./assets/image3.jpg"
import "./App.css"

function App(){
  return(
  <>
 <Nav/>
 <Main src={image1} name="One Piece"/>
 <Main src={image3} name="Naruto"/>
 <Main src={image2} name="Bleach"/>
 <Footer/>
  </>
  )
}
export default App