import React, { useState, useEffect, useRef } from 'react'
import bellSound from '/bell-alert.mp3'

const HardTimer = () => {
    const INITIAL_TIME = 10 * 60; // 10 minutes in seconds
    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);
    const bellAudio = useRef(null)

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    // Start Egg Timer
    const handleStart = () => {
        if (!isRunning && timeLeft > 0) {
            // Had to put the audio in here first so it's trigger-allowed by the browser later
            if (bellAudio.current) {
                bellAudio.current.play().then(() => {
                    bellAudio.current.pause();
                    bellAudio.current.currentTime = 0;
                }).catch((e) => {
                    console.warn('Priming audio failed:', e);
                });
            }

            setIsRunning(true);
        }
    };

    // Pause Egg Timer
    const handlePause = () => {
        setIsRunning(false);
    };

    // Stop Egg Timer and reset time
    const handleStop = () => {
        setIsRunning(false);
        setTimeLeft(INITIAL_TIME);
    };

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }

        return () => clearInterval(timerRef.current);

    }, [isRunning]);

    // Stop Egg Timer at 0
    useEffect(() => {
        if (timeLeft === 0) {
            setIsRunning(false);
            clearInterval(timerRef.current)

            // Play cute sound when timer is at 0
            bellAudio.current.play()
                .then(() => {
                    setTimeout(() => {
                        alert("Time’s up! Your egg is looking egg-cellent!");
                    }, 100);
                })

            // Reset Egg Timer when alert is closed
            setTimeLeft(INITIAL_TIME);
        }
    }, [timeLeft]);

    return (
        <div>
            <div className="countdown">
                <p className="time">{formatTime(timeLeft)}</p>
            </div>

            <audio ref={bellAudio} src={bellSound} preload="auto" />

            <div className="flex-row">
                <button className="button button-white" onClick={handleStart} disabled={isRunning || timeLeft === 0}>Start Timer</button>
                <button className="button button-white" onClick={handlePause} disabled={!isRunning}>Pause</button>
                <button className="button cancel" onClick={handleStop}>Cancel (Bad Egg)</button>
            </div>
        </div>
    );
};

export default HardTimer;