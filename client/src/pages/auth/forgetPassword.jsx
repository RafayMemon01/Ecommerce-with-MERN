import React from "react";
import { useState } from "react";
import Layout from "../../components/layout/layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // toast.success('yeah')
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/forget-password", {
        email,
        answer,
        newPassword,
      });
      if (res.data.success) {
        toast.success(res.data.message);;

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout
      title={"Forgetten Password || E Commerce"}
      description={"Sign up to E commerce with MERN by Rafay Memon"}
    >
      <div className="signUpForm">
        <div className="container mt-5">
          <h1 className="text-center">Register Form </h1>
          <form onSubmit={handleSubmit} id="registrationForm" className="mt-3">
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="What is Your Favorite Book?"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Reset
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgetPassword;
