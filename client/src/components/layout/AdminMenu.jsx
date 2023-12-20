import React from "react";
import { NavLink, Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h3><Link style={{textDecoration:"None", color:"black"}} to={"/dashboard/admin"}>ADMIN PANEL</Link></h3>
          <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">
            Create Product
          </NavLink>
          <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">
            Create Category
          </NavLink>
          <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
