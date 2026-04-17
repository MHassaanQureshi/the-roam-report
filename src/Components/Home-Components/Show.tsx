interface items{
   
    number:string;
    city:string;
    date:string;
    details:string;
    image:string;
}

export default function Show(props:items){
    return(
        <>
        <div className="w-full border-t border-dotted border-[#E9F9B2] text-[#E9F9B2] mt-10 p-6">

  <div className="grid grid-cols-[80px_1fr_200px] items-start gap-6 md:text-4xl text-xl">

    {/* Number */}
    <div className="text-6xl">
      {props.number}
    </div>

    {/* Text */}
    <div className="flex flex-col gap-2">
      <h1>{props.city}</h1>
      <p>{props.date}</p>
      <p>{props.details}</p>
    </div>

    {/* Image */}
    <div className="hidden md:block">
      <img 
        src={props.image} 
        alt="unable to load" 
        className="w-[200px] h-[130px] object-cover"
      />
    </div>

  </div>

</div>
        </>
    )
}