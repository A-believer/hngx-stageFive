import { Link } from "react-router-dom";
import logo from "../assets/HelpMeOutLogo.svg"
import profileImg from "../assets/profile-circle.svg"
import dropdown from "../assets/arrow-down.svg"
import search from "../assets/search-normal.svg"

export default function Profile() {
  return (
    <section className="lg:px-[100px] md:px-[60px] px-5">
      <div className="lg:py-12 md:py-8 py-5 flex justify-between items-center">
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

      <div className="mt-10 flex justify-between items-center">
        <div>
          <h1 className="font-sora text-[#141414] text-[32px] font-bold leading-[48px] tracking-tight">Hello, John Mark</h1>
        <p className="font-workSans text-[#434343] text-sm font-light leading-[21px] tracking-tight mx-auto ">Here are your recorded videos</p>
        </div>
         
        <label className="h-full flex gap-x-4 bg-[#C3C3C3]/50 px-10 py-6 w-[400px] rounded-xl font-workSans" htmlFor="search">
          <img src={search} alt="search"/>
          <input type="text" name="search" id="search"  placeholder="Search for a particular video" className="bg-[transparent] w-full border-0 outline-none font-workSans"/>
        </label>
      </div>
        <hr className="my-10 text-[grey]/50"/>

      <div>
        <p className="text-[#141414] text-opacity-80 text-lg font-medium font-workSans">Recent files</p>

        <div className="flex justify-center items-center mt-20">
          Your Videos go here
        </div>
      </div>
    </section>
  )
}
