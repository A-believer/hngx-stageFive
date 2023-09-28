import { Route, Routes } from "react-router-dom";
import Popup from "./modals/Popup";
import Homepage from "./pages/Homepage";


export default function App() {
  return (
    <Routes>
      <Route path="/popup" element={<Popup/>} />
      <Route path="/home" element={<Homepage/>} />
    </Routes>
  )
}
