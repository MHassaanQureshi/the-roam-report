import Show from "./Show";

export default function ShowsCard(){
    return(
        <>
        <div className="bg-[#5F6D3B] w-full flex flex-col items-center mt-10">
            <span>
                <h1 className="text-4xl text-[#E9F9B2] mt-28 font-bold">Upcoming itinerary</h1>
            </span>
            <div className="w-full min-h-screen grid place-content-center gap-4 md:grid-cols-2 md:-mt-52 ">
                <Show />
                <Show />
                <Show />
                <Show />
            </div>
        </div>
        <img src="/images/Border.png" alt="unable to load" className="w-full -mt-1" />
        </>
    )
}