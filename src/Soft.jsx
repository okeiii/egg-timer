import React from 'react'
import { Link } from 'react-router-dom'
import CountdownTimer from './SoftTimer'
import softEgg from '/soft-egg.svg'

function Soft() {
    return (
        <div>
            <img src={softEgg} className="smaller" alt="Pixelated soft-boiled egg" />
            <h1>Your yolk is a soft yolk...</h1>
            <CountdownTimer />
            <div className="card">
                <Link to="/menu">
                    <button>Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default Soft
