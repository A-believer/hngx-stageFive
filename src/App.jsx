import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Homepage from "./pages/Homepage";
import VideoRecorded from "./pages/VideoRecorded.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileVideoDetails from "./pages/ProfileVideoDetails.jsx";
import Signup from "./pages/Signup.jsx";


export default function App() {
  return (
    <main className="relative">
      <Navbar/>
      <Routes>
      <Route index path="/" element={<Homepage/>} />
      <Route path="/videoId" element={<VideoRecorded/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/profilevideoId" element={<ProfileVideoDetails/>} />
      <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </main>
  )
}
