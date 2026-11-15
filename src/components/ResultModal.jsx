import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref,
) {
  const dialog = useRef()

  const userLost = remainingTime <= 0
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100) // score compris entre 1 et 100

  // permet d'exposer les propriétés et méthodes de ce composant accessibles depuis l'extérieur de ce composant
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>Tu as perdu</h2>}
      {!userLost && <h2>Ton score: {score}</h2>}
      <p>
        La temps cible était{" "}
        <strong>
          {targetTime} seconde{targetTime > 1 ? "s" : ""}.
        </strong>
      </p>
      <p>
        Tu as arrêté le chrono à{" "}
        <strong>
          {formattedRemainingTime} seconde
          {formattedRemainingTime > 1 ? "s" : ""} de la fin.
        </strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Fermer</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  )
})

export default ResultModal
