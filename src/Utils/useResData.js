import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useResData = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [allListOfRes, setallListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    //optional chaining
    setlistOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setallListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { listOfRes, setlistOfRes, allListOfRes, setallListOfRes };
};

export default useResData;
