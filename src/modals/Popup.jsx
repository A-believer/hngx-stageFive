import { Link } from "react-router-dom";


export default function Popup() {
  return (
      <div className="w-[400px] h-[400px] flex justify-center items-center">
          <Link to={`/home`} target="_blank">
              Home
          </Link>
    </div>
  )
}
