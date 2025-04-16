import React from 'react'
import { Link } from 'react-router-dom'
import CountdownTimer from './RunnyTimer'
import runnyEgg from '/runny-egg.svg'

function Runny() {
    return (
        <div>
            <img src={runnyEgg} className="smaller" alt="Pixelated runny egg" />
            <h1>Your yolk is runny!</h1>
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

export default Runny
