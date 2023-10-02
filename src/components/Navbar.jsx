import {Link} from "react-router-dom"
import logo from "../assets/HelpMeOutLogo.svg"
export default function Navbar() {
  return (
    <nav className="py-6 px-[100px] flex items-center gap-x-[339px] justify-between whitespace-nowrap">
      <Link to={`/`} className="text-primary-600 flex gap-x-2 items-center font-inter font-bold">
        <img src={logo} alt="logo" />
        <h2>
          HelpMeOut
        </h2>
      </Link>

      <div className="font-workSans font-medium text-[#000] flex gap-x-10 py-2.5 px-5">
        <a href="#features">Features</a>
        <a href="#howItWorks">How it works</a>
      </div>

      <Link to="/signup" className="px-10 py-4 font-sora font-semibold text-primary-500">Get Started</Link>
    </nav>
  )
}
