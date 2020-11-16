import React from 'react'
import '../index.css'

const Notification = ({errorMessage}) => {
    console.log("length", errorMessage.length)
    if (errorMessage.length === 0) { return <></> }
    else if (errorMessage.type === "notificacion"){
        return <div className="notification"><h1>{errorMessage.title} </h1><span className="text">{errorMessage.text}</span></div>
    } else if(errorMessage.type === "error") {
        return <div className="notification-error"><h1>{errorMessage.title} </h1><span className="text">{errorMessage.text}</span></div>
    }
   // return <></>
}

export default Notification