import { useState, useRef } from "react"

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef()

  const [timerStarted, setTimerStarted] = useState(false)
  const [timerExpired, setTimerExpired] = useState(false)

  /** Démarrer le chrono */
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000)

    setTimerStarted(true)
  }

  /** Arrêter le chrono */
  function handleStop() {
    clearTimeout(timer.current)
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>

      {timerExpired && <p>Tu as perdu !</p>}

      <p className="challenge-time">
        {targetTime} seconde{targetTime > 1 ? "s" : ""}
      </p>

      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>

      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Le temps s'écoule..." : "Timer inactif"}
      </p>
    </section>
  )
}
