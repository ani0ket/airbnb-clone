import Image from "next/image";
import Logo from "@public/airbnb logo.png";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

export default function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection", //being used to identify the range of dates  selected by the user. it's inside ranges object
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function resetInput() {
    setSearchInput("");
    setNumberOfGuests(1);
  }

  function handleSearch() {
    if (!searchInput) return;
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(), //toISOString() converts date to string
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests,
      },
    });
  }
  return (
    <header className="w-full py-3  sticky top-0 left-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        className="relative w-1/5 cursor-pointer h-10"
        onClick={() => router.push("/")}
      >
        <Image
          src={Logo}
          fill={true}
          alt="Airbnb Logo"
          sizes="500px"
          className="object-contain"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full px-3 py-1 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          className=" outline-none w-full flex-grow text-gray-600"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer p-2 md:mx-2"
          onClick={handleSearch}
        />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-8" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <button className="flex-grow text-gray-500 " onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
