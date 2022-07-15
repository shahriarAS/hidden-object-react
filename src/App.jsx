import wood from "./assets/images/wood_black.jpg";
import GameScreen from "./pages/GameScreen";

function App() {

  return (
    <div id="app" style={{ backgroundImage: `url(${wood})` }}>
      <GameScreen />
    </div>
  )
}

export default App
