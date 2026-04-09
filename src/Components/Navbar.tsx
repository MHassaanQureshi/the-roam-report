import "../index.css"
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <nav className="bg-white w-[18rem] h-[20%] flex justify-center items-center align-middle gap-4 font-jakarta mt-6 p-2 rounded-4xl">
            <Link to="/" className="text-black text-xl">Home</Link>
            <Link to="/" className="text-black text-xl">Articles</Link>
            <Link to="/" className="text-black text-xl">About</Link>
        </nav>
    )
}