import { useState, useRef, useEffect } from "react"
import ResultModal from "./ResultModal"

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef()
  const dialog = useRef()

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

  // Si le temps est écoulé, le chrono s'arrête automatiquement donc le joueur a perdu
  // le chrono s'arrête et la modale s'ouvre après le rendu du composant lorsque timeRemaining change
  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer.current)
      dialog.current.open()
    }
  }, [timeRemaining])

  function handleReset() {
    setTimeRemaining(targetTime * 1000)
  }

  /** Démarrer le chrono. Le temps restant est calculé toutes les 10 ms en déduisant 10ms au temps restant précédant */
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10)
    }, 10)
  }

  /** Arrêter le chrono manuellement donc le joueur a gagné */
  function handleStop() {
    dialog.current.open()
    clearInterval(timer.current)
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} seconde{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Le temps s'écoule..." : "Timer inactif"}
        </p>
      </section>
    </>
  )
}
