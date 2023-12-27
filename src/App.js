
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Modal from './components/Modal';
function App() {
  const [showModal,setShowModal] = useState(false)
  const [currState,setCurrState] = useState("")
  return (
    <div>
     <Navbar showModal={showModal} setShowModal={setShowModal} currState={currState} setCurrState={setCurrState}/>
     {showModal ? <Modal currState={currState}/>: null}

    </div>
  );
}

export default App
