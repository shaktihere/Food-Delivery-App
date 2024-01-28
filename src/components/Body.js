import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //State variable - superpowerfull variable
  const [restUList, setRestUList] = useState([]); //restUList - the which will be dynamically updated using hooks, setRestUList - the list which eill be used to modify restUList(helper)
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); //Fetch data from online API, this will be done after initial page rendering

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json(); //Convert object to JSON file
    setRestUList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }; //Fetching the data and storing it to our desired array

  //Conditional Rendering - rendering based on condition
  /*if (restUList.length === 0) {
    return <Shimmer />; //Shimmer UI - fake UI till page is rendering
  }*/

  return restUList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //On-click filter the restaurant cards and update it in UI
              if (searchText.length === 0) {
                setFilteredRestaurant(restUList);
              } else {
                const filteredRestaurant = restUList.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restUList.filter(
              (res) => res.info.sla.deliveryTime < 30
            ); //Filter logic
            setFilteredRestaurant(filterList); //Update the list, so that it reflects in UI
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resName={restaurant} />
          /**resName is used here, same mentioned above */
        ))}
      </div>
    </div>
  );
};

export default Body;
