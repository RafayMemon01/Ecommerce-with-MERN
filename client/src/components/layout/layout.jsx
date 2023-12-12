import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

const Layout = ({children,  title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {children}
        </main>
      <Footer />
    </>
  );
};
Layout.defaultProps={
  title:"E-Commerce",
  description:"E Commerce Website With MERN Stack",
  keywords:"MongoDB, Mongoose, React JS, Javascript, MERN, Express JS, Node JS",
  author:"Rafay Memon"
}


export default Layout;
