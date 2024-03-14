import { useState } from "react";
import MenuCategoryItems from "./MenuCategoryItems";

const RestaurantMenuCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(true);
  const [open, setOpen] = useState();

  const handleClick = () => {
    setShowItems(!showItems);
    setOpen(!open);
  };

  return (
    <div className="w-2/4 mx-auto my-5 p-2 bg-gray-100 shadow-lg cursor-pointer">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{open ? "⬇️" : "⬆️"}</span>
      </div>
      {/* Items of menu for every category */}
      {showItems && <MenuCategoryItems items={data.itemCards} />}
    </div>
  );
};

export default RestaurantMenuCategory;
