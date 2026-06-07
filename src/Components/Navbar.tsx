import "../index.css"
import "./Navbar.css"
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <nav className="bg-white w-[16rem] h-[5%] flex justify-center items-center gap-4 font-jakarta mt-20 p-2 rounded-4xl absolute z-50 float">
            <Link to="/" className="text-black text-xl">Home</Link>
            <Link to="../pages/ArticlesPage.tsx" className="text-black text-xl">Articles</Link>
            <Link to="../pages/AboutPage.tsx" className="text-black text-xl">About</Link>
        </nav>
    )
}