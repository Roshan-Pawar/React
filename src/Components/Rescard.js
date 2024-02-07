import {CLOUDINARY_URL} from "../Utils/Constants";

const ResCard = (props) => {
    // Destructuring the props
    const { resList } = props;
    const { cloudinaryImageId, name, avgRating, cuisines } = resList.info;
    const { deliveryTime } = resList.info.sla;
  
    return (
      <div className="res-card">
        <img
          className="res-img"
          src={CLOUDINARY_URL + cloudinaryImageId}
          alt="res-img"
        />
        <h3 className="res-name">{name}</h3>
        <h4 className="res-rating">🌟{avgRating}</h4>
        <h4 className="res-dilivery-time">{deliveryTime} min</h4>
        <h4 className="res-cusine">{cuisines.join(", ")}</h4>
      </div>
    );
};

export default ResCard;  