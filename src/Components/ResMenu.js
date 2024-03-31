import { useParams } from "react-router-dom";
import useResMenu from "../Utils/useResMenu";
import Shimmer from "./Shimmer";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const ResMenu = () => {
  const { resId } = useParams();
  // This custom hook take ID as parameter and return's menu for that restaurant
  const menu = useResMenu(resId);

  if (menu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    menu?.data?.cards[2]?.card?.card?.info;

  const menuCategory =
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center font-sans">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-semibold text-md">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>

      {menuCategory.map(( category ) => (
        <RestaurantMenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default ResMenu;
