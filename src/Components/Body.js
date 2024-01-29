import ResCard from "./Rescard";
import resList from "../Utils/data";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="search">Search !!</div>
      <div className="filter">
        <button
          className="all-filter"
          onClick={() => {
            const allListOfRes = resList;
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
          <ResCard key={resList.info.id} resList={resList} />
        ))}
      </div>
    </div>
  );
};

export default Body;