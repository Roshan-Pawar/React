import ResCard, { withVegLabel } from "./Rescard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../Utils/useNetworkStatus";
import useResData from "../Utils/useResData";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  // This useResData custom hook is used to fetch the Restaurant list for home page
  const { listOfRes, setlistOfRes, allListOfRes, setallListOfRes } =
    useResData();

  const ResCardVeg = withVegLabel(ResCard);

  const networkStatus = useNetworkStatus();
  if (networkStatus === false) return <h1>you are offline</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);
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
            const searchList = allListOfRes.filter((res) => {
              const nameMatch = res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
              const cuisinesMatch = res.info.cuisines.some((cuisine) =>
                cuisine.toLowerCase().includes(searchText.toLowerCase())
              );
              return nameMatch || cuisinesMatch;
            });

            setlistOfRes(searchList);
          }}
        >
          🔍
        </button>
      </div>
      <div className="mx-40 mt-10 flex">
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
        
        <div className="px-2 mx-2 h-8 w-auto">
          <label className="mx-2">Name :</label>
          <input
            className="p-1 h-8 w-28 border border-black rounded-md"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="mx-40 my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* This map function will loop over the resList object for every restuarant */}
        {listOfRes.map((resList) => (
          <Link key={resList.info.id} to={/restaurants/ + resList.info.id}>
            {resList.info.veg ? (
              <ResCardVeg resList={resList} />
            ) : (
              <ResCard resList={resList} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
