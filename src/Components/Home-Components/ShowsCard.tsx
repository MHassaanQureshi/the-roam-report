import Show from "./Show";

export default function ShowsCard(){
    return(
        <>
        <div className="bg-[#5F6D3B] w-full flex flex-col items-center mt-10">
            <span>
                <h1 className="text-4xl text-[#E9F9B2] mt-28 font-bold">Upcoming itinerary</h1>
            </span>
            <div className="w-full min-h-screen grid gap-0 place-content-center md:place-content-start lg:place-content-center">
    <Show city="Oxaca,Mexico" date="March 12 - March 25" number="01" details="For mole,markets, and Monte Alban" image="/images/mexico.png"/>
    <Show  city="Rome,Italy" date="June 9 - june 30" number="02" details="Evening walks and neighboorhood trattorias" image=" /images/rome.png"/>
    <Show  city="Lofoten,Norway" date="October 20 - October 28" number="03" details="Midnight sun, damp air ,and dying cod" image="/images/norway.png"/>
    
    <Show  city="Kagoshima,Japan" date="Dec 3 - Dec 21" number="04" details="Admire Sakurajima from the ferry" image="/images/japan.png"/>
</div>
        </div>
        <img src="/images/Border.png" alt="unable to load" className="w-full -mt-1" />
        </>
    )
}