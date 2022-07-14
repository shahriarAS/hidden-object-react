import wood from "./assets/images/wood_black.jpg";
import GameScreen from "./pages/GameScreen";

function App() {

  return (
    <div style={{ backgroundImage: `url(${wood})` }}>
      <GameScreen />
    </div>
  )
}

export default App
