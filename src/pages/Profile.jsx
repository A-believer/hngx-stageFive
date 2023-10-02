import { Link } from "react-router-dom";
import logo from "../assets/HelpMeOutLogo.svg"
import profileImg from "../assets/profile-circle.svg"
import dropdown from "../assets/arrow-down.svg"
import search from "../assets/search-normal.svg"
import link from "../assets/link.svg"
import more from "../assets/more.svg"
import videoFrameI from "../assets/videoFrameI.png"
import videoFrameII from "../assets/videoFrameII.png"

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

        <div className="flex justify-center items-center mt-20 gap-x-16 mb-20">
          <Link to={`/profilevideoid`} className="px-4 pt-6 pb-6 rounded-3xl border border-[#B6B3C6] bg-[#B6B3C6]/10 space-y-5">
            <img src={videoFrameI} alt="" />
            <div className="flex justify-between">
              <p className="text-[#141414] font-workSans font-normal capitalize text-xl">How to create Facebook Ad listing</p>
              <div className="flex gap-x-6">
                <img src={link} alt="link" />
                <img src={more} alt="more" />
              </div>
            </div>
            <p className="uppercase text-[#B6B3C6] font-workSans">Semptember 23, 2023</p>
          </Link>
          

          <Link to={`/profilevideoid`} className="px-4 pt-6 pb-6 rounded-3xl border border-[#B6B3C6] bg-[#B6B3C6]/10 space-y-5">
            <img src={videoFrameII} alt="" />
            <div className="flex justify-between">
              <p className="text-[#141414] font-workSans font-normal capitalize text-xl">How to create Facebook Ad listing</p>
              <div className="flex gap-x-6">
                <img src={link} alt="link" />
                <img src={more} alt="more" />
              </div>
            </div>
            <p className="uppercase text-[#B6B3C6] font-workSans">Semptember 23, 2023</p>
          </Link>

        </div>
      </div>
    </section>
  )
}
