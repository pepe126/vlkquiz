import React from 'react'
import {Link} from 'react-router-dom'

const Startupbtn= () => {

    return(
        <div>
            <Link to = "/game"><button>Avvia</button></Link>
            <Link to = "/istruzioni"><button>Istruzioni</button></Link>
        </div>
    )
}

export default Startupbtn