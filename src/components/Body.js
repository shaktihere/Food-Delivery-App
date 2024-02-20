import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //State variable - superpowerfull variable
  const [restUList, setRestUList] = useState([]); //restUList - the which will be dynamically updated using hooks, setRestUList - the list which eill be used to modify restUList(helper)
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

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

  if (onlineStatus === false) return <h1>Looks like you're offline</h1>;

  return restUList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search p-4 m-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-4 px-2 py-1 bg-green-200 rounded-lg"
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
        <div className="m-4 px-2 flex items-center">
          <button
            className="bg-green-400 px-4 py-2 rounded-md"
            onClick={() => {
              const filterList = restUList.filter(
                (res) => res.info.avgRating > 4
              ); //Filter logic
              setFilteredRestaurant(filterList); //Update the list, so that it reflects in UI
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="m-4 px-2 flex items-center">
            <label className="text-bold">UserName: </label>
            <input
              className="p-2 border border-black ml-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map(
          (restaurant) =>
            restaurant.info.sla.deliveryTime < 30 ? (
              <RestaurantCardPromoted
                key={restaurant.info.id}
                resName={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.info.id} resName={restaurant} />
            )
          /**resName is used here, same mentioned above */
        )}
      </div>
    </div>
  );
};

export default Body;
