import Player from "./components/Player.jsx"
import TimerChallenge from "./components/TimerChallenge.jsx"

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Facile" targetTime={1} />
        <TimerChallenge title="Pas facile" targetTime={5} />
        <TimerChallenge title="Difficile" targetTime={10} />
        <TimerChallenge title="Pour les pros" targetTime={15} />
      </div>
    </>
  )
}

export default App
