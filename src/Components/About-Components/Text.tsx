interface textitem {
  heading:string;
  text:string;
}
export default function Text(props:textitem){
    return(
        <>
        <div className="w-full border-t border-dotted border-[#E9F9B2] text-[#E9F9B2] mt-10 p-4 md:p-6 md:flex md:gap-20 md:items-center pb-6">
            <h1 className="font-bold text-4xl md:text-8xl gap-2">
            {props.heading}
            </h1>
            <p>
           {props.text}
            </p>
        </div>
        
        </>
    )
}