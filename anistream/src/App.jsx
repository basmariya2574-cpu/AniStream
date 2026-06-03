import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import Notifications from "./pages/Notifications";
import VideoPlayer from "./pages/VideoPlayer";
import WatchParty from "./pages/WatchParty";
import ReleaseCalendar from "./pages/ReleaseCalenar";
import Achievements from "./pages/Achievements";
import MyList from "./pages/MyList";
import AnimeQuiz from "./components/AnimeQuiz";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
        <Route path="/watchparty" element={<WatchParty />} />
        <Route path="/release-calendar" element={<ReleaseCalendar />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/quiz" element={<AnimeQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;