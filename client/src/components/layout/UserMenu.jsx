import React from "react";
import { NavLink, Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h3>
            <Link
              style={{ textDecoration: "None", color: "black", }}
              to={"/dashboard/user"}
            >
              DASHBOARD
            </Link>
          </h3>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Your Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
