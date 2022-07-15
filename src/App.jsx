import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import wood from "./assets/images/wood_black.jpg";
import GameScreen from "./pages/GameScreen";
import HomePage from './pages/HomePage';

function App() {
  return (
    <div id="app" className="w-screen h-screen flex items-center" style={{ backgroundImage: `url(${wood})` }}>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<GameScreen />} />
      </Routes>
    </div>
  )
}

export default App
