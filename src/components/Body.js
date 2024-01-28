import RestaurantCard from "./RestaurantCard";
import RestList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //State variable - superpowerfull variable
  const [restUList, setRestUList] = useState(RestList); //restUList - the which will be dynamically updated using hooks, setRestUList - the list which eill be used to modify restUList(helper)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = RestList.filter(
              (res) => res.info.sla.deliveryTime < 30
            ); //Filter logic
            setRestUList(filterList); //Update the list, so that it reflects in UI
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restUList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resName={restaurant} />
          /**resName is used here, same mentioned above */
        ))}
      </div>
    </div>
  );
};

export default Body;
