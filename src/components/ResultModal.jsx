import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref,
) {
  const dialog = useRef()

  // permet d'exposer les propriétés et méthodes de ce composant accessibles depuis l'extérieur de ce composant
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>Tu as {result}</h2>
      <p>
        La temps cible était{" "}
        <strong>
          {targetTime} seconde{targetTime > 1 ? "s" : ""}.
        </strong>
      </p>
      <p>
        Tu as arrêté le chrono à <strong>X secondes de la fin.</strong>
      </p>
      <form method="dialog">
        <button>Fermer</button>
      </form>
    </dialog>
  )
})

export default ResultModal
