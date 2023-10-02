import logo from "../assets/HelpMeOut2.svg"

export default function Footer() {
  return (
    <footer id="footer" className="w-full flex gap-x-[243px] justify-between whitespace-nowrap px-[130px] py-[98px] bg-primary-500 text-primary-50 items-center">
      <div className="self-start flex gap-x-2 items-center font-inter font-bold">
        <img src={logo} alt="logo" />
        <p>HelpMeOut</p>
      </div>


      <div className="flex justify-between gap-x-[220px] items-center font-workSans font-normal">
        <ul className="flex flex-col gap-y-[26px]">
        <li className="font-semibold font-sora">Menu</li>
        <li>Home</li>
        <li>Converter</li>
        <li>How it Works</li>
      </ul>

        <ul className="flex flex-col gap-y-[26px]">
        <li className="font-semibold font-sora">About us</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        </ul>
        
        <ul className="flex flex-col gap-y-[26px]">
        <li className="font-semibold font-sora">Screen Recorder</li>
        <li>Browser Window</li>
        <li>Desktop</li>
        <li>Application</li>
      </ul>
      </div>
      
    </footer>
  )
}
