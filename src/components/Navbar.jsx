import React from 'react'

function Navbar({showModal,setShowModal,currState,setCurrState}) {
  return (
    <div style={{
        height:"80px",
        backgroundColor:"black",
        width:"100vw",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"

    }}>
        <p style={{
            fontSize:"20px",
            color:"white",
            fontWeight:"600",
            marginLeft:"20px"
        }}>
      Activity Tracker
        </p>
        <div style={{
            display:"flex",
            gap:"10px",
            color:"#707070",
            marginRight:"20px"

        }}>
            <p style={{
                cursor:"pointer"
            }} onClick={()=>{setShowModal(!showModal); setCurrState("user") }} >Create User</p>
            <p style={{
                cursor:"pointer"
            }} onClick={()=>{setShowModal(!showModal); setCurrState("exercise") }}>Create Exercise</p>
            <p style={{
                cursor:"pointer"
            }} onClick={()=>{setShowModal(!showModal); setCurrState("activity") }}>Create Activity</p>

        </div>
    </div>
  )
}

export default Navbar