import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Homepage from "./pages/Homepage";
import VideoRecorded from "./pages/VideoRecorded.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileVideoDetails from "./pages/ProfileVideoDetails.jsx";
import Signup from "./pages/Signup.jsx";


export default function App() {
  const location = useLocation()
  const displayNavFooter = location.pathname === "/signup" || location.pathname === "/profile" || location.pathname === "/profilevideoId"

  return (
    <main className="relative">
      {!displayNavFooter && <Navbar/>}
      <Routes>
      <Route index path="/" element={<Homepage/>} />
      <Route path="/videoId" element={<VideoRecorded/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/profilevideoId" element={<ProfileVideoDetails/>} />
      <Route path="/signup" element={<Signup/>} />
      </Routes>
      {!displayNavFooter && <Footer/>}
    </main>
  )
}
