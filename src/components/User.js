import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const User = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h2 className="text-bold">{loggedInUser}</h2>
      <h2>Location: Noida</h2>
      <h3>Insta: {loggedInUser}</h3>
    </div>
  );
};

export default User;
