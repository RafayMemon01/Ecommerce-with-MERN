import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import CategoryForm from "../../components/form/CategoryForm";
import { useConfig } from "../../context/auth";
import { Button, Modal } from "antd";

const CreateCategory = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [updateCount, setUpdateCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [selected, setSelected] = useState(null);

  //for user config
  const config = useConfig();

  //create new category
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    try {
      const { data } = await axios.post(
        "/api/v1/category/create-category",
        { name },
        config
      );
      if (data.success) {
        toast.success(`${name} is Created`);
        setUpdateCount(updateCount + 1);
        setName("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

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
  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }, // Pass the updated data in the request body
        config
      );
  
      if (data.success) {
        toast.success(`${updatedName} is Updated`);
        setUpdateCount(updateCount + 1);
        setIsModalVisible(false); // Close the modal after successful update
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error While Update Category");
    }
  };
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
                <CategoryForm
                  handleSubmit={handleSubmit}
                  value={name}
                  setValue={setName}
                />
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
                              <button className="btn btn-danger"
                              onClick={async () => {
                                try {
                                  const { data } = await axios.delete(
                                    `/api/v1/category/delete-category/${c._id}`,
                                    config
                                  );
                                  if (data.success) {
                                    toast.success(`${c.name} is Deleted`);
                                    setUpdateCount(updateCount + 1);
                                  } else {
                                    toast.error(data.message);
                                  }
                                } catch (error) {
                                  console.log(error);
                                  toast.error("Error While Deleting Category");
                                }
                              }}
                              >
                                Delete
                              </button>
                              <button
                                className="btn btn-primary mx-2"
                                onClick={() => {
                                  setIsModalVisible(true);
                                  setUpdatedName(c.name);
                                  setSelected({ _id: c._id });
                                }}
                              >
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
            <Modal
              title="Update Category"
              onCancel={() => setIsModalVisible(false)}
              footer={null}
              visible={isModalVisible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
