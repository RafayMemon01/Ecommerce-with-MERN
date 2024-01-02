import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import CategoryForm from "../../components/form/CategoryForm";
import { useAuth } from "../../context/auth";
import { useConfig } from "../../context/auth";

const CreateCategory = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] =useState("")
  const [updateCount, setUpdateCount] = useState(0);
  const config = useConfig()
  
  const handleSubmit = async (e) => {   
    e.preventDefault()
    console.log(name)
    try {
      const {data} = await axios.post("/api/v1/category/create-category", { name }, config)
      if(data.success){
        toast.success(data.message)
        setUpdateCount(updateCount + 1)
        setName("")
      }else{
        toast.error(data.message)
      }
      
      

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  // get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data.success && data.category) {
        setCategory(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, [updateCount]);

  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3 mt-4">
              <h1>Manage Category</h1>
              <div className="p-3">
                <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName}  />
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {category?.map((c) => {
                    return (
                      <>
                        <tr>
                          <td key={c._id}>{c.name}</td>
                          <td>
                            <div>
                              <button className="btn btn-danger ">
                                Delete
                              </button>
                              <button className="btn btn-primary mx-2">
                                Edit
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
