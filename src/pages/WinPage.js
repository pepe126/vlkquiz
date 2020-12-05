import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Startupbtn.css"


const WinPage = () => {

    return(
        <div className="section lost">
            <h1>HAI VINTO</h1>
            <Link to = "/"><button className = "smallbtn" >Homepage</button></Link>
        </div>
    )
}

export default WinPage