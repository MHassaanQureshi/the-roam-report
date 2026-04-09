
import Article from "../Components/Home-Components/Article"
import Card from "../Components/Home-Components/Card"
import Hero from "../Components/Home-Components/Hero"
import HomeFooter from "../Components/Home-Components/HomeFooter"
import ShowsCard from "../Components/Home-Components/ShowsCard"



export default function HomePage() {
  return (
   <>
   <div className="flex flex-col mb-10">
    <Hero />
   <Article />
   <div className="flex flex-col gap-4 justify-center w-full align-middle items-center mt-10">
    <h1 className="font-extrabold text-4xl">Latest travel stories</h1>
    <div className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-2 md:m-10 ">
      <Card image="/images/Image-1.png" data="October 10,2025" details="Finding Stillness in the Hills of San Cristóbal" />
      <Card image="/images/Image-2.png" data="Oct 2, 2025" details="Wandering Through the Streets of Rome" />
      <Card image="/images/Image-3.png" data="September 17,2025" details="Driving Across Monument Valley" />
      <Card image="/images/Image-4.png" data="Sep 2, 2025" details="Walking the Terraces of Northern Vietnam" />
    </div>
     <h1 className="font-bold text-2xl mt-10 underline">View all articles</h1>
     <div className="w-full">
      <ShowsCard />
     </div>
     <div className="w-full">
      <HomeFooter />
     </div>
   </div>
   </div>
   </>
  )
}
