import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from './components/root/Layout';
import Loading from "./components/root/Loading";
import app from './config/firebaseConfig';
import GameScreen from "./pages/GameScreen";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NewGameScreen from './pages/NewGameScreen';
import ProfilePage from "./pages/ProfilePage";
import Register from './pages/Register';
import Settings from './pages/Settings';

function App() {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

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
        </Routes>
      </div>
    )
  )
}

export default App
