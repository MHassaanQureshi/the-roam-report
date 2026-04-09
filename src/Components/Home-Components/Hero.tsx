import "./hero.css"
export default function Hero(){
    return(
         <div className="bg-[#C6DCFF] h-[750px] w-full flex items-center mt-5">
     <div className="w-full h-full flex flex-col mt-50 gap-10">
      <h1 className="text-[#0053D4] text-4xl inline-flex flex-col justify-center font-extrabold items-center leading-none p-0 space-y-0">
  The Roam
  <span className="text-6xl">Report</span>
</h1>
      <span className="flex w-full items-center justify-center mt-6 flex-col gap-4">
  <img 
    src="/images/hero-image.png" 
    alt="hero" 
    className="w-[300px]"
  />

  <p className="text-[#0053D4] text-xl text-center max-w-[400px] font-bold mt-10">
    Stories and photos of long walks, wrong turns, and everyday discoveries
  </p>
</span>
      <span>
        <div className="overflow-hidden w-full text-[#0053D4]  mt-5">
  <div className="flex w-max animate-scroll">
    <p className="mr-10 whitespace-nowrap">
      Lost in the streets of Istanbul — 41.0082° N, 28.9784° E 
    </p>
    <p className="mr-10 whitespace-nowrap">
      Sunset walks in Santorini — 36.3932° N, 25.4615° E  
    </p>
    <p className="mr-10 whitespace-nowrap">
     Wrong turn, right story — Marrakech, Morocco 
    </p>
    <p className="mr-10 whitespace-nowrap">
     Mountains calling — Hunza Valley, Pakistan 
    </p>
    <p className="mr-10 whitespace-nowrap">
    Desert winds & silence — Sahara Expedition  
    </p>
  </div>
</div>
      </span>
     </div>
    </div>
    )
}