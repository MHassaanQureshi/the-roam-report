export default function Article() {
  return (
    <div className="relative w-full">

      {/* Background Image */}
      <img
        src="/images/desert.jpg"
        className="w-full h-[750px] object-cover"
        alt="desert"
      />

      {/* Overlapping Card */}
      <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 bg-white w-[90%] max-w-[350px] rounded-xl shadow-lg p-4">

        {/* Inner Image */}
        <div className="w-full flex justify-center">
          <img
            src="/images/article.png"
            alt="article"
            className="w-full rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center mt-6 gap-3 text-center">
          <p className="font-bold text-lg text-gray-500">
            Featured article
          </p>

          <p className="max-w-[280px] font-bold text-xl">
            Wild Camping Along Tasmania’s East Coast
          </p>
        </div>

      </div>
    </div>
  );
}