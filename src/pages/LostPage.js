import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Startupbtn.css"


const LostPage = () => {

    return(
        <div className="section lost">
            <h1>HAI PERSO</h1>
            <Link to = "/"><button className = "smallbtn" >Homepage</button></Link>

        </div>
    )

}

export default LostPage;