import { useContext } from "react";
import REST_URL from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resName } = props; //Always use the same name here (resName) what it is while passing in the component call, check below its name
  const { name, cuisines, avgRating, sla } = resName?.info; //De-Structuring to make code more pretty/ easy to read
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] hover:bg-green-300">
      <img
        src={REST_URL + resName.info.cloudinaryImageId}
        className="rounded-md"
      />
      <h3 className="font-bold text-lg py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

//Higher order component

//Input ==> RestaurantCard Output==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-orange-500 text-white m-2 p-2 rounded-lg">
          Fast Delivery
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
