import "./App.css";
import wood from "./assets/images/wood_black.jpg";
import GameScreen from "./pages/GameScreen";

function App() {

  return (
    <div id="app" className="w-screen flex items-center" style={{ backgroundImage: `url(${wood})` }}>
      <GameScreen />
    </div>
  )
}

export default App
