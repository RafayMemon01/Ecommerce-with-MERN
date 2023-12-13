import React from "react";
import { useState } from "react";
import Layout from "../../components/layout/layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    // toast.success('yeah')
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(res.data));
        setTimeout(() => {
          navigate("/");
        }, 2000);
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
      title={"Login || E Commerce"}
      description={"Sign up to E commerce with MERN by Rafay Memon"}
    >
      <div className="signUpForm">
        <div className="container mt-5">
          <h1 className="text-center">Login Form</h1>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login{" "}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
