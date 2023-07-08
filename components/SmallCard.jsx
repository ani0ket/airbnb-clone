import Image from "next/image";

export default function SmallCard({ image, location, distance }) {
  return (
    <div className="flex items-center space-x-4 m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-20">
        <Image
          src={image}
          alt="card image"
          fill={true}
          className="rounded-lg"
        />
      </div>
      <div className="w-full">
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}
