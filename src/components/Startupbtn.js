import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Startupbtn.css"


const Startupbtn= () => {

    return(
        <div className="d-flex row justify-content-sm-center justify-content-md-center justify-content-center align-items-center">
            <div className = "col col-md-auto"> <Link to = "/game"><button className = "strtbtn ">Avvia</button></Link></div>
            <div className = "col col-md-auto"> <Link to = "/istruzioni"><button className = "strtbtn ">Istruzioni</button></Link></div>
        </div>
    )
}

export default Startupbtn