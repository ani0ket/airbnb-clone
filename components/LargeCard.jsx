import Image from "next/image";

export default function LargeCard({ image, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={image}
          fill={true}
          className="object-cover rounded-2xl"
          alt="Large Card"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb--3 w-64 ">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:scale-105 transition duration-300 hover:shadow-xl">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
