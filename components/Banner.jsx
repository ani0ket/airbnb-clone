import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px]">
      <Image
        src="https://links.papareact.com/0fm"
        fill={true}
        alt="Banner"
        className="object-cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <h1 className="text-sm sm:text-lg ">
          Get out and stretch your imagination
        </h1>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}
