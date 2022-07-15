import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import wood from "./assets/images/wood_black.jpg";
import GameScreen from "./pages/GameScreen";

function App() {

  return (
    <div id="app" className="w-screen flex items-center" style={{ backgroundImage: `url(${wood})` }}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GameScreen />
    </div>
  )
}

export default App
