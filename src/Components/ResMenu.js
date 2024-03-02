import { useParams } from "react-router-dom";
import useResMenu from "../Utils/useResMenu";
import Shimmer from "./Shimmer";

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
    <div className="px-10">
      <h1 className="font-bold text-2xl ">{name}</h1>
      <h3 className="font-semibold text-lg">{cuisines.join(", ")}</h3>
      <h3 className="font-bold text-lg">Menu</h3>
      <ul className="font-semibold text-base">
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
