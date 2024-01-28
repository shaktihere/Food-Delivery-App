import REST_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resName } = props; //Always use the same name here (resName) what it is while passing in the component call, check below its name
  const { name, cuisines, avgRating, sla } = resName?.info; //De-Structuring to make code more pretty/ easy to read
  return (
    <div className="res-card">
      <img
        src={REST_URL + resName.info.cloudinaryImageId}
        className="biryani"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
