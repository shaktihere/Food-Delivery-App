import foodlogo from "./food-app.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); //subscribing to out store using Selector Hook
  return (
    <div className="flex justify-between bg-green-100 shadow-md m-2">
      <div className="logo">
        <img src={foodlogo} className="w-56" />
      </div>
      <div className="flex items-center">
        <ul className="flex mr-60">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <Link to="/cart">
            <li className="px-4 font-bold">
              Cart - ({cartItems.length}) items
            </li>
          </Link>
          <li className="px-4">
            <button
              className="login"
              onClick={() => {
                if (login == "Login") setLogin("Logout");
                else setLogin("Login");
              }}
            >
              {login}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
