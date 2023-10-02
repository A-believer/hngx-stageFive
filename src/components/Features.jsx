
import featuresImage from "../assets/featuresImage.png"
import recordCircle from "../assets/record-circle.svg"
import refresh from "../assets/refresh-square.svg"
import share from "../assets/send.svg"

export default function Features() {
  return (
    <div id="features" className="px-[100px] py-20 bg-[#fff] space-y-16">
      <div className="w-full text-center">
        <h1 className="font-sora text-[#141414] text-[40px] font-bold mb-2">Features</h1>
        <p className="mt-2 font-workSans text-xl text-[#616163] leading-8">Key Highlights of Our Extension</p>
      </div>

      <div className="flex items-center gap-x-14">
        <div className="space-y-16">
          <div className="flex gap-x-6 items-center">
            <div className="rounded-full w-fit h-fit bg-primary-400 p-2 self-start">
              <img src={recordCircle} alt="recording circle" />
            </div>
            <div>
              <p className="text-[#1B233D] text-[28px] font-semibold font-inter">Simple Screen Recording</p>
              <p className="text-xl font-normal font-workSans leading-[30.26px]">Effortless screen recording for everyone. Record with ease, no tech expertise required.
              </p>
              </div>
          </div>

           <div className="flex gap-x-6 items-center">
            <div className="rounded-full w-fit h-fit bg-primary-400 p-2 self-start">
              <img src={share} alt="" />
            </div>
            <div>
              <p className="text-[#1B233D] text-[28px] font-semibold font-inter">Easy-to-Share URL</p>
              <p className="text-xl font-normal font-workSans leading-[30.26px]">Share your recordings instantly with a single link. No attachments, no downloads.
              </p>
              </div>
          </div>

           <div className="flex gap-x-6 items-center">
            <div className="rounded-full w-fit h-fit bg-primary-400 p-2 self-start">
              <img src={refresh} alt="refresh" />
            </div>
            <div>
              <p className="text-[#1B233D] text-[28px] font-semibold font-inter">Revisit Recordings</p>
              <p className="text-xl font-normal font-workSans leading-[30.26px]">Access and review your past content effortlessly. Your recordings, always at your fingertips.
              </p>
              </div>
          </div>
        </div>

        <div className="w-[900px] h-[454px] rounded-lg">
          <img src={featuresImage} alt="video repository screenshot" className="w-full h-full object-contain"/>
        </div>

      </div>

    </div>
  )
}
