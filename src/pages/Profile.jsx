import { Link } from "react-router-dom";
import logo from "../assets/HelpMeOutLogo.svg"
import profileImg from "../assets/profile-circle.svg"
import dropdown from "../assets/arrow-down.svg"

export default function Profile() {
  return (
    <section className="lg:px-[100px] md:px-[60px] px-5">
      <div className="lg:pt-12 md:pt-8 pt-5 flex justify-between items-center">
        <Link to={`/`} className="text-primary-600 flex gap-x-2 items-center font-inter font-bold">
        <img src={logo} alt="logo" />
        <h2>
          HelpMeOut
        </h2>
        </Link>
        
        <div className="flex items-center gap-x-2">
          <img src={profileImg} alt="profile" />
          <p className="text-base font-normal font-workSans">John Mark</p>
          <img src={dropdown} alt="dropdown" />
        </div>
      </div>

      <div>
        
      </div>
    </section>
  )
}
