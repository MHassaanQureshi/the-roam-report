import Text from "./Text";

export default function AboutHero(){
    return(
        <>
        <div className="bg-[#5F6D3B] w-full flex flex-col items-center ">
            <div className="flex justify-center items-center mt-10">
  <img
    src="/images/About-Hero.png"
    alt="unable to load"
    className="w-[250px] h-[250px] md:w-[335px] md:h-[335px] rounded-full object-cover"
  />
</div>
            <div>

            </div>
            <div>
                <Text  heading="About" text="Hi, I’m Naiá — a slow traveler with a soft spot for train stations, street snacks, and places that don't make the guidebooks. The Roam Report is my way of remembering: the long walks, wrong turns, and all the quiet in-between moments that make a place feel real.

Currently roaming. Eventually home."/>
                <Text  heading="Contact" text="Want to collaborate, pitch a trip, or say hi? Send a note to naia@theroamreport.com — I check it more often than I check train times."/>
            </div>
        </div>
        <img src="/images/Border.png" alt="unable to load" className="w-full -mt-1" />
        </>
    )
}