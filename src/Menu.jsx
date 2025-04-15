import React from 'react'
import { Link } from 'react-router-dom'
import runnyEgg from '/runny-egg.svg'
import softEgg from '/soft-egg.svg'
import hardEgg from '/hard-egg.svg'

function Menu() {
    return (
        <div>
            <h1>Choose Your Egg Timer</h1>
            <p>How would you like your egg cooked?</p>
            <div className="egg-options">
                <Link to="/Runny">
                    <div className="the-egg runny">
                        <img src={runnyEgg} className="eggo" alt="Pixelated runny egg" />
                        <h2>Runny Yolk: 6 mins</h2>
                    </div>
                </Link>
                <Link to="/Soft">
                    <div className="the-egg soft">
                        <img src={softEgg} className="eggo" alt="Pixelated soft-boiled egg" />
                        <h2>Soft-boiled: 8 mins</h2>
                    </div>
                </Link>
                <Link to="/Hard">
                    <div className="the-egg hard">
                        <img src={hardEgg} className="eggo" alt="Pixelated hard-boiled egg" />
                        <h2>Hard-boiled: 10 mins</h2>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/">
                    <button>Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default Menu
