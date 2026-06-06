import Navbar from "./Components/Navbar"
import "./index.css"
import { Routes , Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"

export default function App(){
  return(
    <>
    <div className="w-full h-full flex justify-center flex-col items-center"> 
      <Navbar />
      
    </div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pages/AboutPage.tsx" element={<AboutPage />} />
    </Routes>
    </>
  )
}