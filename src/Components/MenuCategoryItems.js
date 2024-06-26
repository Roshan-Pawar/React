import { CLOUDINARY_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const MenuCategoryItems = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (itemForCart) => {
    // Dispatch an action when ADD button clicked
    dispatch(addItem(itemForCart));
  }
  
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 border-gray-300 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <div className="flex">
                <span className="">
                  {item?.card?.info?.isVeg ? "🟩" : "🟥"}
                </span>

                <span className="px-1 text-amber-400 text-sm leading-6 font-medium">
                  {item?.card?.info?.isBestseller && "⭐BestSeller"}
                </span>
              </div>

              <span className="text-lg font-medium flex justify-start">
                {item?.card?.info?.name}
              </span>
              <span className="text-md flex justify-start">
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>

            <div className="pt-2 text-left mb-20">
              <span className="text-sm text-gray-500">
                {item?.card?.info?.description}
              </span>
            </div>
          </div>
          <div className=" relative w-3/12 flex justify-center">
            <div className="absolute left-15 z-10 px-4 py-1 rounded-md bg-white text-green-600 " >
              <button
               onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img
              src={CLOUDINARY_URL + item?.card?.info?.imageId}
              className="h-2/4 w-3/4 mt-2 rounded-xl object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCategoryItems;
