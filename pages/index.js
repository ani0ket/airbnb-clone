import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Banner from "@components/Banner";
import SmallCard from "@components/SmallCard";
import MediumCard from "@components/MediumCard";
import LargeCard from "@components/LargeCard";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData, liveAnywhereData }) {
  // console.log(liveAnywhereData);
  return (
    <main className={``}>
      <Header />
      <Banner />
      <div className="max-w-7xl mx-auto px-8 sm:px-16 pt-6">
        <section>
          <h2 className="text-2xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                image={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveAnywhereData?.map(({ img, title }) => (
              <MediumCard key={img} image={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          image="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title={"The Greatest Outdoor"}
          description={"Wishlists Curated by airbnb"}
          buttonText={"Get Inspired"}
        />
      </div>
      <Footer />
    </main>
  );
}

// server side rendering (SSR) - every time you refresh the page, it will fetch the data from the server and render it. It caches the data and will not fetch it again until the data changes.

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const liveAnywhereData = await fetch(
    "https://www.jsonkeeper.com/b/VHHT"
  ).then((res) => res.json());
  return {
    props: {
      exploreData,
      liveAnywhereData,
    },
  };
}
