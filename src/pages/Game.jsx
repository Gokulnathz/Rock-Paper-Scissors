import Header from "../components/Header"
import Rock from '../assets/stone.png'
import Paper from '../assets/Paper.png'
import Scissor from '../assets/scissors.png'
import playB from '../assets/playB.png'

import { useState } from "react"
import { Button, Col, Modal, Row } from "react-bootstrap"

function Game() {
  const choices=['Rock','Paper','Scissor']
  const[userChoice,setUserChoice]=useState('');
  const[compChoice,setCompChoice]=useState('');
  const[compPoint,setCompPoint]=useState(0);
  const[userPoint,setUserPoint]=useState(0);
  const [showModal, setShowModal] = useState(false);
  const [winner,setWinner]=useState("");
  const [loading, setLoading] = useState(false);

 const selection=()=>{
  if (!userChoice) {
    alert("Please make a choice!"); 
    return;
  }
  setLoading(true);

    const index=Math.floor(Math.random()*choices.length);
    const randomCompValue=choices[index];
    setCompChoice(randomCompValue);
    if(randomCompValue===userChoice){
      // setCompPoint(compPoint);
      // setUserPoint(userPoint)
    }
    else if((userChoice === "Rock" && randomCompValue === "Scissor") ||
    (userChoice === "Paper" && randomCompValue === "Rock") ||
    (userChoice === "Scissor" && randomCompValue === "Paper"))
     { setUserPoint(userPoint+1)}
    else 
      {setCompPoint(compPoint+1)}
    
    setTimeout(() => {
      setUserChoice("");
      setCompChoice("");
      setLoading(false);
    }, 1000);
    if(userPoint+1===4)
    {
       setWinner("User");
      setShowModal(true);
    }else if(compPoint+1==4){
      setWinner("Computer");
      setShowModal(true)
    }
  }
  // reset game

  const resetGame = () => {
    setUserChoice("");
    setCompChoice("");
    setCompPoint(0);
    setUserPoint(0);
  };

 
  return (
    <>
    
    <Header/>
   
    <div className="container mt-5">
      <Row>
        <Col lg={9} md={8} xs={12} sm={12}>
        <table>
          <tbody>
          <tr>
            <th><h3>Computer Choice</h3></th>
            <th style={{ paddingLeft: "10px" }}><h3>:</h3></th>
            <th><h3>{compChoice}</h3></th>
        </tr>
        <tr>
            <th><h3>User Choice</h3></th>
            <th style={{ paddingLeft: "10px" }}><h3>:</h3></th>
            <th><h3>{userChoice}</h3></th>
        </tr>
          </tbody>
        
       </table>
       <div>
       <button onClick={()=>setUserChoice('Rock')} className="bg-transparent border-0 scale-button"><img className="icons" src={Rock} alt="ROCK" /></button>
       <button onClick={()=>setUserChoice('Paper')} className="bg-transparent border-0 scale-button"><img className="icons" src={Paper} alt="PAPER" /></button>
       <button onClick={()=>setUserChoice('Scissor')} className="bg-transparent border-0 scale-button"><img className="icons" src={Scissor} alt="SCISSOR" /></button>
       </div>
       <div className="d-flex justify-content-center">
       <button onClick={selection} className="bg-transparent border-0"  disabled={loading}><img className="playB" src={playB} alt="" /></button> 
       </div>
        </Col>
      <Col lg={3} md={4} xs={12} sm={12}>
      <table>
          <tbody>
          <tr>
            <th style={{ padding: "10px" }}><h3>User</h3></th>
            <th style={{ padding: "30px" }}><h3>Computer</h3></th>
          </tr>
          <tr>
          <th style={{ paddingLeft: "40px" }}><h3>{userPoint}</h3></th>
          <th style={{ paddingLeft: "60px" }}><h3>{compPoint}</h3></th>
          </tr>
          </tbody>
      </table>
      
      {/* {userPoint===5 && <div className="zoom-in-out mt-5 ml-1"><center><h3>User Wins</h3></center></div>} */}
      
    { userPoint===5||compPoint===5 &&
      
      <Modal show={showModal} onHide={resetGame}>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
        <h3>{winner} Wins</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={resetGame}>
            Play Again
          </Button>
        </Modal.Footer>
      </Modal>
      }
      {/* {compPoint===5 && <div className="zoom-in-out mt-5"><h2>Computer Wins</h2></div>} */}
     
      </Col>
      </Row>
            
    </div>
    </>
  )
}

export default Game