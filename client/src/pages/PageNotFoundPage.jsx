// PageNotFoundPage.js

import React from "react";
import Layout from "../components/layout/layout";
import { NavLink } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const PageNotFoundPage = () => {
  return (
    <Layout>
      <div className="not-found-container">
        <FaExclamationTriangle className="not-found-icon" />
        <h1>Page Not Found</h1>
        <p>This page does not exist</p>
        <p>
          Please go back to the <NavLink to="/">Homepage</NavLink>
        </p>
      </div>
    </Layout>
  );
};

export default PageNotFoundPage;
