import { Link } from "react-router-dom";
import logo from "../assets/HelpMeOutLogo.svg"
import profileImg from "../assets/profile-circle.svg"
import dropdown from "../assets/arrow-down.svg"
import videoFrame from "../assets/videoFrame.png"
import edit from "../assets/edit.svg"
import telegram from "../assets/telegram.svg"
import facebook from "../assets/facebook.svg"
import whatsapp from "../assets/whatsapp.svg"
import copy from "../assets/copy.svg"
import SendToMail from "../components/SendToMail";
import { useState } from "react";



export default function ProfileVideoDetails() {
  const [sendModal, setSendModal] = useState(false)
  const [email, setEmail] = useState("")
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

      <p className="flex gap-x-2 font-workSans text-[#141414]/70 font-normal mb-6">
        <span>Home</span>/
        <span>Recent Videos</span>/
        <span className="text-primary-400 font-medium">How To Create A Facebook Ad Listing</span>
      </p>

      <p className="font-sora text-[#141414] text-[32px] font-bold leading-[48px] tracking-tight flex gap-x-8 items-center">How To Create A Facebook Ad Listing
        <span>
          <img src={edit} alt="edit" />
        </span></p>

      <div className="mb-20 mt-10">
        <div className="px-4 pt-6 pb-6 rounded-3xl border border-[#B6B3C6] bg-[#B6B3C6]/10 space-y-5 mb-16">
            <img src={videoFrame} alt="video"  className="w-full"/>
        </div>

        <div className="flex w-full justify-between gap-x-[90px] mb-16">
          <label htmlFor="email" className="font-normal text-lg font-workSans bg-primary-300/20 py-3 px-6 flex justify-between items-center rounded-2xl w-full">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[transparent] w-full border-0 outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="enter email of receiver" />
            <button
              onClick={() => setSendModal(true)}
              
              className="font-manrope font-medium text-[#FFF] bg-primary-300 rounded-lg py-2.5 px-[18px]">Send</button>
          </label>
        
        <div className="flex justify-between items-center gap-x-[50px] p-3 border-[0.5px] border-[#929292] rounded-2xl bg-[#FAFAFA] w-fit">
              <p className="text-[#4B4B4B] leading-[25px]">https://www.helpmeout/Untitled_Video_20232509</p>
              <button type="button" className="py-2.5 pl-[18px] pr-10 flex items-center gap-x-2 text-primary-500 leading-6 rounded-lg border border-primary-500">
                <img src={copy} alt="copy" className="w-full"/>
                <span className="inline-block">copy</span>
              </button>
          </div>
        </div>
        

        <div className="flex flex-col gap-y-[15px]">
            <p className="text-primary-900 font-semibold">Share your video</p>
            <div className="font-inter flex items-center gap-x-4">
              <button type="button" className="flex gap-x-2 items-center py-3 px-4 rounded-md border border-primary-800">
                <img src={facebook} alt="facebook" />
                Facebook
              </button>

              <button type="button" className="flex gap-x-2 items-center py-3 px-4 rounded-md border border-primary-800">
                <img src={whatsapp} alt="whatsapp" />
                WhatsApp
              </button>

              <button type="button" className="flex gap-x-2 items-center py-3 px-4 rounded-md border border-primary-800">
                <img src={telegram} alt="telegram" />
                Telegram
              </button>
            </div>
          </div>
      </div>
      {sendModal &&
        <SendToMail
          email={email}
          closeModal={() => setSendModal(false)} />}

    </section>
  )
}
