import React from 'react'
import {Link} from 'react-router-dom'


const Istruzioni = () => {

    return (
        <div>
            <h1>ISTRUZIONI</h1>
            <p>Il quiz consiste in 10 domande</p>
            <p>Ogni domanda ha un'unica risposta esatta e un tempo di 20 secondi per rispondere. <br/>
               Se la risposta selezionata è corretta si prosegue alla domanda successiva e il timer si resetta.<br/>
               In caso di risposta sbagliata il gioco termina!<br/>
               Si vince in caso si risponda correttamente a tutte e 10 le domande poste.<br/>
            </p>
            <Link to = "/"><button>Homepage</button></Link>

        </div>
    )
}

export default Istruzioni;