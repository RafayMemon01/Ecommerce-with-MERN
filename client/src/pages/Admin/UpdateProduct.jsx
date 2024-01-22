import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu";
import { useNavigate, useParams } from "react-router-dom";
import { Select } from "antd";
import { useConfig } from "../../context/auth";
const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const config = useConfig();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

//get a single product
const getSingleProduct = async () => {
  try {
    const {data} = await axios.get(`/api/v1/product/get-product/${params.slug}`);
    if (data?.success && data?.product) {
      setName(data?.product?.name);
      setDescription(data?.product?.description);
      setPrice(data?.product?.price);
      setQuantity(data?.product?.quantity);
      setShipping(data?.product?.shipping);
      setCategory(data?.product?.category._id);
      setId(data?.product?._id);
    }
  } catch (error) {
    console.log(error)
    toast.error("Error In Getting Product");
  }


}
useEffect(() => {
  getSingleProduct();
  // eslint-disable-next-line 
},[])


  //get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success && data.category) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  console.log(categories);

  //create product
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = await axios.put(`/api/v1/product/update-product/${id}`, productData, config)
      if (data.success) {
        toast.success(`${name} is Created`);
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setShipping("");
        setCategory("");
        setPhoto("");
        
        setTimeout(() => {
        navigate("/dashboard/admin/products");
      }, 3000);
      }else(
        toast.error("Error in Creating Product")
    )

    } catch (error) {
      console.log(error)
      toast.error("Error in Creating Product");
    }
  }



  //delte a product
  const handleDelete = async () => {
    try {
      const answer = window.confirm("Are you sure you want to delete?");
      if (!answer) return;
      const { data } = await axios.delete(`/api/v1/product/delete-product/${id}`, config);
      if (data.success) {
        toast.success(`${name} is deleted`);
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setShipping("");
        setCategory("");
        setPhoto("");
        setTimeout(() => {
          navigate("/dashboard/admin/products");
        }, 3000);
      }
    } catch (error) {
      console.log(error)
      toast.error("Error in Deleting Product");
    }
  }
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid  p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3 mt-4">
              <h4>Manage Product</h4>
              <div className="m-1 w-7">
                <Select
                  bordered={false}
                  placeholder={"Select Category"}
                  size="large"
                  showSearch={true}
                  className="form-select mb-3"
                  onChange={(value) => {
                    setCategory(value);
                  }}
                  value={category}
                >
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
                <div className="mb-3">
                  <label className="btn btn-outline-primary">
                    {photo ? photo.name : "Upload Photo"}

                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                {/* img preview */}
                <div className="mb-3">
                  {photo ? (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product_photo"
                        height={"100px"}
                        className="img img-responsive"
                      />
                    </div>
                  ):(<div className="text-center">
                  <img
                    src={`/api/v1/product/product-photo/${id}`}
                    alt="product_photo"
                    height={"100px"}
                    className="img img-responsive"
                  />
                </div>)}
                </div>
                <div className="mb-3 d-flex flex-column gap-1">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <textarea
                    type="text"
                    placeholder="Description"
                    className="form-control resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <input
                    type="number"
                    placeholder="Price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <Select
                    bordered={false}
                    placeholder={"Select Shipping"}
                    size="large"
                    className="form-select mb-3"
                    onChange={(value) => {
                      setShipping(value);
                    }}
                    value={shipping ? "0" : "1"}
                  >
                    <Option value="0">No</Option>
                    <Option value="1">Yes</Option>
                  </Select>
                </div>
                <div className="mb-3 ">
                  <button onClick={handleUpdate} className="btn btn-primary">Update</button>
                  <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
