import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from './components/root/Layout';
import GameScreen from "./pages/GameScreen";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NewGameScreen from './pages/NewGameScreen';
import Register from './pages/Register';

function App() {
  return (
    <div id="app" className="max-w-[1440px] h-screen">
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={
          <Layout childComp={<HomePage />} />
        } />
        <Route path="/play" element={
          <GameScreen />
        } />
        <Route path="/new" element={
          <Layout childComp={<NewGameScreen />} />
        } />
        <Route path="/register" element={
          <Layout childComp={<Register />} />
        } />
        <Route path="/login" element={
          <Layout childComp={<Login />} />
        } />
      </Routes>
    </div>
  )
}

export default App
