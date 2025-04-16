import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import runnyEggAnimation from './assets/runny-egg.json'
import softEggAnimation from './assets/soft-egg.json'
import hardEggAnimation from './assets/hard-egg.json'

function Menu() {
    const runnyLottieRef = useRef()
    const softLottieRef = useRef()
    const hardLottieRef = useRef()

    return (
        <div>
            <h1>Choose Your Egg Timer</h1>
            <p>How would you like your egg cooked?</p>
            {/* Egg Options */}

            <div className="egg-options">
                {/* The Runny Egg */}
                <Link to="/Runny">
                    <div className="the-egg runny"
                        onMouseEnter={() => runnyLottieRef.current?.play()}
                        onMouseLeave={() => runnyLottieRef.current?.stop()}
                    >
                        <Lottie
                            lottieRef={runnyLottieRef}
                            animationData={runnyEggAnimation}
                            loop={true}
                            autoplay={false}
                            className="eggo"
                        />
                        <h2>Runny Yolk: 6 mins</h2>
                    </div>
                </Link>

                {/* The Soft-Boiled Egg */}
                <Link to="/Soft">
                    <div className="the-egg soft"
                        onMouseEnter={() => softLottieRef.current?.play()}
                        onMouseLeave={() => softLottieRef.current?.stop()}
                    >
                        <Lottie
                            lottieRef={softLottieRef}
                            animationData={softEggAnimation}
                            loop={true}
                            autoplay={false}
                            className="eggo"
                        />
                        <h2>Soft-boiled: 8 mins</h2>
                    </div>
                </Link>

                {/* The Hard-Boiled Egg */}
                <Link to="/Hard">
                    <div className="the-egg hard"
                        onMouseEnter={() => hardLottieRef.current?.play()}
                        onMouseLeave={() => hardLottieRef.current?.stop()}
                    >
                        <Lottie
                            lottieRef={hardLottieRef}
                            animationData={hardEggAnimation}
                            loop={true}
                            autoplay={false}
                            className="eggo"
                        />
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
