// PageNotFoundPage.js

import React from "react";
import Layout from "../components/layout/layout";
import { NavLink } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const PageNotFoundPage = () => {
  return (
    <Layout>
      <div className="not-found-container">
        <FaExclamationTriangle className="not-found-icon" />
        <h1>Page Not Found</h1>
        <p>This page does not exist</p>
        <p>
          Go back to the <br /><NavLink to="/">Home <FaHome /></NavLink>
        </p>
      </div>
    </Layout>
  );
};

export default PageNotFoundPage;
