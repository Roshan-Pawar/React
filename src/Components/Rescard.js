import { CLOUDINARY_URL } from "../Utils/constants";

const ResCard = (props) => {
  // Destructuring the props
  const { resList } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = resList.info;
  const { deliveryTime } = resList.info.sla;

  return (
    <div className="w-52 h-62 mx-3 my-4 rounded-xl shadow-lg hover:scale-95">
      <img
        className="w-52 h-36 rounded-xl object-cover"
        src={CLOUDINARY_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <h4 className="float-left">🌟{avgRating}</h4>
      <h4 className="float-left px-2">{deliveryTime} min</h4>
      <h4 className="clear-both text-gray-600	">
        {cuisines.slice(0, 3).join(", ")}
      </h4>
    </div>
  );
};

// Higher Order Component for VEG label

export const withVegLabel = (ResCard) => {
  return (props) => {
    return (
      <div className=" hover:scale-95">
        <label className="absolute z-10 bg-green-600 text-white rounded-md p-1 m-2">Veg</label>
        <ResCard {...props}/>
      </div>
    );
  };
};
export default ResCard;
