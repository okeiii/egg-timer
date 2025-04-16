import React from 'react'
import { Link } from 'react-router-dom'
import CountdownTimer from './HardTimer'
import hardEgg from '/hard-egg.svg'

function Hard() {
    return (
        <div>
            <img src={hardEgg} className="smaller" alt="Pixelated hard-boiled egg" />
            <h1>You've got a hard yolk.</h1>
            <p>Boil your egg in medium heat and start the timer.</p>
            <CountdownTimer />
            <div className="card">
                <Link to="/menu">
                    <button>Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default Hard
