import React from "react";
import { useState } from "react";
import Layout from "../../components/layout/layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../styles/authStyle.css'
// import 'dotenv'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, phone, address, password);
    // toast.success('yeah')
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        phone,
        address,
        password,
        answer,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
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
      title={"Register || E Commerce"}
      description={"Sign up to E commerce with MERN by Rafay Memon"}
    >
      <div className="signUpForm">
        <div className="container mt-5">
          <h1 className="text-center">Register Form</h1>
          <form onSubmit={handleSubmit} id="registrationForm" className="mt-3">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"

                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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
                type="tel"
                className="form-control"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="What is your favorite Book?"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
        
      </div>
    </Layout>
  );
};

export default Register;
