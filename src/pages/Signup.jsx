import { Link } from "react-router-dom";


export default function Signup() {
  return (
    <main className="w-full">
      <Link to={`/`} className="text-primary-600 flex gap-x-2 items-center font-inter font-bold xl:pt-[79px] lg:pt-[50px] md:pt-10 pt-8 xl:pl-[113px] lg:pl-[83px] md:pl-10 pl-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none"><g clipPath="url(#clip0_577_957)">
    <path d="M31.6401 16.8421C31.0804 14.9122 30.0621 13.1464 28.6721 11.6953C27.2821 10.2442 25.5617 9.15092 23.6577 8.50876C21.7766 7.96121 19.7993 7.82666 17.8614 8.11432C15.9234 8.40199 14.0705 9.10507 12.4296 10.1754C12.2946 10.3107 12.1252 10.4067 11.9398 10.4531C11.7544 10.4994 11.5598 10.4944 11.377 10.4386C11.0084 10.3192 10.6763 10.1079 10.4121 9.82455C10.2197 9.47744 10.1575 9.07308 10.2366 8.68419C10.2869 8.49754 10.3751 8.32327 10.4959 8.17233C10.6167 8.02138 10.7673 7.89701 10.9384 7.807C15.5875 5.0877 20.1489 4.38595 24.5349 5.78946C26.6942 6.50768 28.6656 7.69964 30.3047 9.27811C31.9439 10.8566 33.2094 12.7816 34.0085 14.9123H39.8857C38.684 10.1719 35.7871 6.0361 31.7427 3.28683C27.6983 0.537565 22.7868 -0.634627 17.9368 -0.00811872C13.0868 0.618389 8.63434 3.00017 5.42135 6.68692C2.20837 10.3737 0.457493 15.1098 0.499772 20C0.499772 20.7895 0.587491 21.4912 0.587491 22.2807H8.04363C8.32839 22.2645 8.61069 22.3414 8.84801 22.4996C9.08532 22.6578 9.26481 22.8888 9.35942 23.1579C9.93235 25.0811 10.9553 26.8402 12.3434 28.2894C13.7316 29.7385 15.445 30.8361 17.3419 31.4912C19.223 32.0388 21.2002 32.1733 23.1382 31.8856C25.0761 31.598 26.929 30.8949 28.5699 29.8245C28.705 29.6892 28.8743 29.5933 29.0597 29.5469C29.2452 29.5005 29.4398 29.5055 29.6226 29.5614C29.9911 29.6808 30.3232 29.8921 30.5875 30.1754C30.7799 30.5225 30.8421 30.9269 30.7629 31.3158C30.7127 31.5024 30.6244 31.6767 30.5036 31.8276C30.3829 31.9786 30.2323 32.103 30.0612 32.193C27.417 33.9722 24.3008 34.9192 21.1138 34.9123C19.5386 34.9004 17.9732 34.6641 16.4647 34.2105C14.2963 33.5094 12.3162 32.3235 10.6747 30.7428C9.03315 29.162 7.77338 27.2281 6.991 25.0877H1.20153C2.46964 29.7501 5.38277 33.7958 9.40243 36.477C13.4221 39.1582 18.2765 40.2935 23.0683 39.6731C27.8601 39.0527 32.2653 36.7186 35.4696 33.1022C38.674 29.4858 40.4608 24.8316 40.4998 20C40.5161 19.2679 40.4868 18.5355 40.4121 17.807H33.0436C32.7445 17.7872 32.4563 17.6872 32.2093 17.5174C31.9623 17.3476 31.7657 17.1143 31.6401 16.8421Z" fill="#100A42"/>
    <path d="M20.5841 28.7496C22.311 28.733 23.9944 28.2057 25.4222 27.2342C26.8501 26.2627 27.9585 24.8904 28.6078 23.2902C29.2572 21.6899 29.4185 19.9333 29.0715 18.2416C28.7244 16.5498 27.8845 14.9986 26.6575 13.7833C25.4305 12.568 23.8713 11.7429 22.1763 11.4121C20.4813 11.0812 18.7263 11.2593 17.1324 11.924C15.5384 12.5887 14.1768 13.7102 13.219 15.1472C12.2612 16.5843 11.7501 18.2726 11.75 19.9996C11.7499 21.1558 11.979 22.3005 12.424 23.3676C12.869 24.4347 13.521 25.4031 14.3425 26.2167C15.1639 27.0303 16.1385 27.6731 17.2098 28.1078C18.2811 28.5426 19.428 28.7607 20.5841 28.7496Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_577_957">
      <rect width="40" height="40" fill="white" transform="translate(0.5)"/>
    </clipPath>
  </defs>
</svg>
        <h2>
          HelpMeOut
        </h2>
      </Link>

      <section className="mt-10 flex flex-col items-center font-inter gap-y-8 md:w-[475px] w-full md:mx-auto mx-5">
        <div className="text-center">
           <h1 className="text-[#141414] text-[32px] font-bold leading-[48px] tracking-tight">Log in or Sign up</h1>
        <p className="text-[#434343] text-sm font-light leading-[21px] tracking-tight w-[70%] mx-auto mt-2">Join millions of others in sharing successful moves on <span className=" font-normal font-['Sen'] leading-[21px]">HelpMeOut</span>.</p>
        </div>
       
        <button className="flex gap-x-4 w-full py-3 rounded-xl border border-[#141414] justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" /><path d="M11.9999 23.0001C14.9699 23.0001 17.4599 22.0151 19.2799 20.3351L15.7249 17.5751C14.7399 18.2351 13.4799 18.6251 11.9999 18.6251C9.13492 18.6251 6.70992 16.6901 5.84492 14.0901H2.16992V16.9401C3.97992 20.5351 7.69992 23.0001 11.9999 23.0001Z" fill="#34A853" /><path d="M5.845 14.0886C5.625 13.4286 5.5 12.7236 5.5 11.9986C5.5 11.2736 5.625 10.5686 5.845 9.90859V7.05859H2.17C1.4 8.59145 0.999321 10.2832 1 11.9986C1 13.7736 1.425 15.4536 2.17 16.9386L5.845 14.0886Z" fill="#FBBC05" /><path d="M11.9999 5.375C13.6149 5.375 15.0649 5.93 16.2049 7.02L19.3599 3.865C17.4549 2.09 14.9649 1 11.9999 1C7.69992 1 3.97992 3.465 2.16992 7.06L5.84492 9.91C6.70992 7.31 9.13492 5.375 11.9999 5.375Z" fill="#EA4335" /></svg>
          <span>Continue with Google</span>
        </button>

        <button className="flex gap-x-4 w-full mx-5 md:mx-0 py-3 rounded-xl border border-[#141414] justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><g clipPath="url(#clip0_205_4761)"><path d="M24.5 11.9993C24.5 5.37187 19.1274 -0.000705719 12.5 -0.000705719C5.87258 -0.000705719 0.5 5.37187 0.5 11.9993C0.5 17.9888 4.88823 22.9533 10.625 23.8535V15.468H7.57813V11.9993H10.625V9.35554C10.625 6.34805 12.4165 4.68679 15.1576 4.68679C16.4705 4.68679 17.8438 4.92117 17.8438 4.92117V7.87429H16.3306C14.8399 7.87429 14.375 8.7993 14.375 9.74829V11.9993H17.7031L17.1711 15.468H14.375V23.8535C20.1118 22.9533 24.5 17.9888 24.5 11.9993Z" fill="#1877F2" /><path d="M17.1711 15.4688L17.7031 12H14.375V9.74899C14.375 8.80001 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1576 4.6875C12.4165 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2359 23.9501 11.8621 24 12.5 24C13.1379 24 13.7641 23.9501 14.375 23.8542V15.4688H17.1711Z" fill="white" /></g><defs><clipPath id="clip0_205_4761"><rect width="24" height="24" fill="white" transform="translate(0.5)" /></clipPath></defs></svg>
          <span>Continue with Facebook</span>
        </button>

        <div className="flex items-center gap-x-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="201" height="1" viewBox="0 0 201 1" fill="none">
  <path d="M0.5 0.5L200.5 0.500017" stroke="#B9C2C8" strokeLinecap="round"/>
</svg>
          <span className="text-[#B9C2C8] text-sm font-medium leading-[21px] tracking-tight">or</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="201" height="1" viewBox="0 0 201 1" fill="none"><path d="M0.5 0.5L200.5 0.500017" stroke="#B9C2C8" strokeLinecap="round"/></svg>
        </div>

        <form className="flex flex-col font-workSans gap-y-8 w-full">
          <div className="text-[#141414] space-y-3">
             <label htmlFor="email" className="font-workSans flex flex-col gap-y-3">
            <span className="text-sm font-medium">Email</span>
              <input type="email" placeholder="Enter your email address" name="email" id="email"
                className="p-4 rounded-xl border border-[#B6B3C6] bg-[none] outline-none focus:outline-none"
             />
            </label>

            <label htmlFor="password" className="font-workSans flex flex-col gap-y-3">
            <span className="text-sm font-medium">Password</span>
            <input type="password" placeholder="Enter your password" name="password" id="password" className=" p-4 rounded-xl border border-[#B6B3C6] bg-[none] outline-none focus:outline-none"/>
            </label>
          </div>
          
        <Link to={`/profile`} className="font-workSans text-center bg-primary-500 text-[#F9F9FF] text-lg font-medium rounded-lg p-4 mb-[100px]">Sign Up</Link>
        </form>
       
      </section>
    </main>
  )
}
