import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Startupbtn.css"


const LostPage = () => {

    return(
        <div>
            <h1>Hai Perso</h1>
            <Link to = "/"><button className = "btn btn-warning" >Homepage</button></Link>

        </div>
    )

}

export default LostPage;