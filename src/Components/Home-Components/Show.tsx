interface Items {
  number: string;
  city: string;
  date: string;
  details: string;
  image: string;
}

export default function Show(props: Items) {
  return (
    <div className="w-full border-t border-dotted border-[#E9F9B2] text-[#E9F9B2] mt-10 p-4 md:p-6">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-[80px_1fr_200px] md:items-start md:gap-6">
        
        {/* Mobile Image */}
        <div className="block md:hidden">
          <img
            src={props.image}
            alt={props.city}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>

        {/* Number */}
        <div className="text-4xl md:text-6xl font-bold">
          {props.number}
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-4xl">{props.city}</h1>
          <p className="text-base md:text-xl">{props.date}</p>
          <p className="text-sm md:text-lg">{props.details}</p>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block">
          <img
            src={props.image}
            alt={props.city}
            className="w-[200px] h-[130px] object-cover rounded-md"
          />
        </div>

      </div>
    </div>
  );
}