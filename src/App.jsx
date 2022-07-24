import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from './components/root/Layout';
import Loading from "./components/root/Loading";
import { auth, db } from './config/firebaseConfig.js';
import GameScreen from "./pages/GameScreen";
import HomePage from './pages/HomePage';
import Leaderboard from "./pages/Leaderboard";
import Login from './pages/Login';
import NewGameScreen from './pages/NewGameScreen';
import ProfilePage from "./pages/ProfilePage";
import Register from './pages/Register';
import Settings from './pages/Settings';
import useStore from "./store";

function App() {
  const state = useStore((state) => state)
  const [user, loading, error] = useAuthState(auth);


  const getDataOnce = async () => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data()
      localStorage.setItem("gameLevel", data.level)
      state.resetState({
        highScore: data.highScore,
        bestTime: data.bestTime,
        level: data.level,
        isSound: data.settings.isSound,
        isMusic: data.settings.isMusic,
        difficulty: data.settings.difficulty
      })
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    if (user) {
      getDataOnce()
    } else {
      state.resetState()
    }
  }, [user]);

  return (
    loading ? <Loading /> : (
      <div id="app" className="max-w-[1440px] m-auto overflow-x-hidden">
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
            <Layout childComp={user ? <HomePage /> : <Register />} />
          } />
          <Route path="/login" element={
            <Layout childComp={user ? <HomePage /> : <Login />} />
          } />
          <Route path="/settings" element={
            <Layout childComp={<Settings />} />
          } />
          <Route path="/profile" element={
            <Layout childComp={user ? <ProfilePage /> : <Login />} />
          } />
          <Route path="/leaderboard" element={
            <Layout childComp={<Leaderboard />} />
          } />
        </Routes>
      </div>
    )
  )
}

export default App
