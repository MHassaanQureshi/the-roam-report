import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function HomeFooter(){
    return(
        <>
        <div className="flex flex-col text-[#332115] items-center gap-4 ">
            <span>
                <p className="text-3xl font-bold">End of the trail</p>
            </span>
            <span>
                <h1 className="text-5xl font-extrabold flex flex-col text-center">Less rush. <span>More</span> <span>wonder.</span></h1>

            </span>
            <span>
                <ul className="flex gap-4 underline">
                <li><Link to="/" className="text-black text-xl">Home</Link></li>
                <li><Link to="/" className="text-black text-xl">Articles</Link></li>
                <li><Link to="/" className="text-black text-xl">About</Link></li>
                </ul>
            </span>
            <span>
                 <div className="flex gap-4 text-2xl">
      <FaFacebook className="text-[#332115] cursor-pointer" />
      <FaInstagram className="text-[#332115] cursor-pointer" />
      <FaTwitter className="text-[#332115] cursor-pointer" />
      <FaLinkedin className="text-[#332115] cursor-pointer" />
    </div>
            </span>
            
        </div>
        </>
    )
}