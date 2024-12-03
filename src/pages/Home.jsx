import Header from "../components/Header"
import logo from '../assets/logo.png'
import { Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import Game from "./Game"

function Home() {
  return (
    <>
        <Header/>
        <div className="container d-flex justify-content-center">
        
          <img  src={logo} alt="logo" />
        
       
        </div>
       
        <div className="container d-flex justify-content-center">
        <Link to='/play' element={Game}><Button className="ml-2">START</Button></Link>
        </div>
      
      
    </>
  )
}

export default Home