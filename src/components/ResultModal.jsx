export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal" open>
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
}
