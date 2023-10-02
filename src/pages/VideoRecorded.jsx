import { useState } from "react"
import SendToMail from "../components/SendToMail"
import editTitle from "../assets/videoTitle.svg"
import copy from "../assets/copy.svg"
import telegram from "../assets/telegram.svg"
import facebook from "../assets/facebook.svg"
import whatsapp from "../assets/whatsapp.svg"
import videoImage from "../assets/videoImg.png"
import { Link } from "react-router-dom"

export default function VideoRecorded() {
  const [sendModal, setSendModal] = useState(false)
  const [email, setEmail] = useState("")
  return (
    <section className="pt-10 pb-16 flex flex-col gap-y-16 font-sora">
      <div className="px-[100px] flex gap-x-[72px]">
        <div className="flex flex-col gap-y-16">
          
          <h1 className="text-[#141414] text-[45px] font-bold">Your video is ready!</h1>

          <div>
            <p className="text-[#727272] mb-[10px]">Name</p>
            <label htmlFor="title" className="flex gap-x-3 text-2xl text-primary-400">
              <input
                className="bg-[transparent] border-0 outline-none"
                type="text"
                placeholder="Untitled_Video_20232509"
                name="title"
                id="title" />
              <img src={editTitle} alt="editTitle" />
            </label>
          </div>

          <label htmlFor="email" className="font-normal text-lg font-workSans bg-primary-300/20 py-3 px-6 flex justify-between items-center rounded-2xl">
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

          <div className="flex flex-col gap-y-4">
            <p className="text-[#141414] text-xl font-semibold">Video Url</p>

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

        <div className="pl-10 border-l border-[#939393] w-full flex flex-col gap-y-[80px]">
          <div
            className="w-full border rounded-lg h-full">
            <img src={videoImage} alt="image" />
          </div>

          <div>
            <p className="text-2xl font-semibold">Transcript</p>
            <select name="language" id="language" className="flex justify-between w-40 p-2 border border-[#CFCFCF] rounded outline-none mt-4">
              <option value="english" className="bg-[white]">English</option>
            </select>

            <div
              className="overflow-y-auto w-full h-[256px] mt-10 flex flex-col gap-y-4">
              Transciption goes here
            </div>
          </div>
        </div>
      </div>
      


      <div className="text-center flex flex-col gap-y-10 bg-[#7E7E7E]/10 py-12 text-2xl">
        
        <p className="w-[47%] mx-auto font-semibold">To ensure the availability and privacy of your video, we recommend saving it to your account.</p>

        <button type="button" className="text-primary-50 font-workSans px-8 py-4 rounded-lg bg-primary-500 text-base w-fit mx-auto">Save Video</button>

        <p className="font-semibold text-[#7E7E7E]">Don’t have an account? <Link to={`/signup`} className="text-primary-500 underline">Create account</Link></p>
      </div>

      {sendModal &&
        <SendToMail
          email={email}
          closeModal={() => setSendModal(false)} />}
    </section>
  )
}
