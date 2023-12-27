import React from 'react'

function Modal({currState}) {
  return (
    <div style={{
        marginTop:"50px",
        padding:"20px",
        background:"gray",
        opacity:"0.5",
        border:"2px solid black",
        width:"200px",
        marginLeft:"50%"

    }}>
        {currState==="user"?
        <input type="text" placeholder='Username'/>:currState==="exercise"?
        <input type="text" placeholder='Exercise'/>:  <input type="text" placeholder='Activity'/>
    }
        <button>Submit</button>
    </div>
  )
}

export default Modal