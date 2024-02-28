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
      <div className="filter">
        <button
          className="all-filter"
          onClick={() => {
            setlistOfRes(allListOfRes);
          }}
        >
          All Restaurants
        </button>

        <button
          className="rating-filter"
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
          className="fast-filter"
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
      <div className="res-container">
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
