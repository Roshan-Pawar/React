import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../Utils/useResMenu";

const ResMenu = () => {
  const { resId } = useParams();
  // This custom hook take ID as parameter and return's menu for that restaurant
  const menu = useResMenu(resId);

  if (menu === null) return <Shimmer />;

  const { name, cuisines } = menu?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} - {"Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
