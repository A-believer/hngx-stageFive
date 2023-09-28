import { Link } from "react-router-dom";


export default function Homepage() {
  return (
    <section className="w-[400px] h-[400px] flex justify-center items-center flex-col">
      <p>Welcome to HomePage</p>
      <Link to={`/`}>Back to Popup</Link></section>
  )
}
