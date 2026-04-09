interface carddetails {
    image: string,
    data : string,
    details : string,
}
export default function Card(props : carddetails){
    return(
        <>
        <div className="w-full">
            <span>
                <img src={props.image} alt="unable to load" className="w-[315px] h-[268px]" />
            </span>
            <span className="flex flex-col items-center mt-10 w-full">
                <p>{props.data}</p>
                <p  className="w-[315px] font-bold text-2xl align-middle text-center">{props.details}</p>
            </span>
        </div>
        </>
    )
}