import { CLOUDINARY_URL } from "../Utils/constants";

const ResCard = (props) => {
  // Destructuring the props
  const { resList } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = resList.info;
  const { deliveryTime } = resList.info.sla;

  return (
    <div className="w-52 h-62 mx-3 my-4 rounded-xl shadow-lg hover:scale-95 hover:border-pink-400 border-2">
      <img
        className="w-52 h-36 rounded-xl object-cover"
        src={CLOUDINARY_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3 className="font-semibold">{name}</h3>
      <h4 className="float-left">🌟{avgRating}</h4>
      <h4 className="float-left px-2">{deliveryTime} min</h4>
      <h4 className="clear-both font-light text-gray-950	">{cuisines.slice(0, 3).join(", ")}</h4>
    </div>
  );
};

export default ResCard;
