import React from 'react'
import '../index.css'

const Notification = ({errorMessage}) => {
    console.log("length", errorMessage.length)
    if (errorMessage.length === 0) { return <></> }
    else {
        return <div className="notification"><h1>{errorMessage.title} </h1><span className="text">{errorMessage.text}</span></div>
    }
   // return <></>
}

export default Notification