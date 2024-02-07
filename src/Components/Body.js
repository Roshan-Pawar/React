import ResCard from "./Rescard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
      const json = await data.json();
      //optional chaining
      setlistOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (listOfRes.length === 0) {
    return <Shimmer/>
  }

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