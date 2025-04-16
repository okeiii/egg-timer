import { useState } from 'react'
import { Link } from 'react-router-dom'
import pixelEgg from '/pixelated-eggo.svg'
import './App.css'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <img src={pixelEgg} className="pixel-egg" alt="Pixelated sunny side egg" />
            </div>
            <h1 className="distance">Lil' Egg Timer</h1>
            <div className="card">
                <Link to="/menu">
                    <button>Click to Start</button>
                </Link>
            </div>
        </>
    )
}

export default Home