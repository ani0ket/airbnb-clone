import Footer from "@components/Footer";
import Header from "@components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "@components/InfoCard";

export default function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guest${
          numberOfGuests > 1 ? "s" : ""
        }`}
      />
      <main className="flex flex-col px-6">
        <section className="flex-grow pt-14 ">
          <p className="text-xs">
            300+ Stays - {range} - for {numberOfGuests} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="btn">Cancellation Flexibility</p>
            <p className="btn">Type of Place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More Filters</p>
          </div>
        </section>
        <section className="flex flex-col">
          {searchResults?.map(
            ({ img, title, location, description, star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
