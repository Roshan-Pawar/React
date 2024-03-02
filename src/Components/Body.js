import ResCard from "./Rescard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../Utils/useNetworkStatus";
import useResData from "../Utils/useResData";

const Body = () => {
  const [searchText, setSearchText] = useState("");
 // This useResData custom hook is used to fetch the Restaurant list for home page
  const { listOfRes, setlistOfRes, allListOfRes, setallListOfRes } = useResData();

  const networkStatus = useNetworkStatus();
  if (networkStatus === false) return <h1>you are offline</h1>;

  // Shimmer UI using ternary operator

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          className="search-box"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          type="submit"
          className="search-submit"
          onClick={() => {
            const searchList = allListOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setlistOfRes(searchList);
          }}
        >
          🔍
        </button>
      </div>
      <div className="mx-40 mt-10">
        <button
          className="px-2 mx-2 h-8 w-auto rounded-full shadow-xl hover:bg-pink-400 hover:text-white"
          onClick={() => {
            setlistOfRes(allListOfRes);
          }}
        >
          All Restaurants
        </button>

        <button
          className="px-2 mx-2 h-8 w-auto rounded-full shadow-xl hover:bg-pink-400 hover:text-white"
          onClick={() => {
            const topRatedListOfRes = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRes(topRatedListOfRes);
          }}
        >
          Ratings 4.0+
        </button>

        <button
          className="px-2 mx-2 h-8 w-auto rounded-full shadow-xl hover:bg-pink-400 hover:text-white"
          onClick={() => {
            const fastListOfRes = listOfRes.filter(
              (res) => res.info.sla.deliveryTime < 30
            );
            setlistOfRes(fastListOfRes);
          }}
        >
          Fast Delivery
        </button>
      </div>
      <div className="mx-40 my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* This map function will loop over the resList object for every restuarant */}
        {listOfRes.map((resList) => (
          <Link key={resList.info.id} to={/restaurants/ + resList.info.id}>
            <ResCard resList={resList} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
