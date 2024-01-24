import ResCard from "./Rescard";
import resList from "../Utils/Data";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search !!</div>
        <div className="res-container">
          {/* This map function will loop over the resList object for every restuarant */}
          {resList.map((resList) => (
            <ResCard key={resList.info.id} resList = {resList}/>
          ))}
        </div>
      </div>
    );
  };

export default Body;