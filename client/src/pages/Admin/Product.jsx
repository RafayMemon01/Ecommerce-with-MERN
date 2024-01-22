import axios from "axios";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/layout";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      // console.log(data);
      setProducts(data.products);
      toast.success("Product Fetched Successfully");
      console.log(products);
    } catch (error) {
      toast.error("Error In Getting Product");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title={"Manage Products || MERN Stack"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-80 p-3 mt-4">
              <h1 className="text-center">Products</h1>
              <div className="d-flex flex-wrap gap-4 justify-content-center">
                {products?.map((p) => (
                  <Link style={{textDecoration:"none",width: "18rem", }} key={p._id} className="card" to={`/dashboard/admin/product/${p.slug}`}>
                    {/* // <div  className="card" style={{ width: "18rem" }}>  */}
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top "
                      alt={p.name}

                      />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                  {/* // </div>  */}
                       </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
