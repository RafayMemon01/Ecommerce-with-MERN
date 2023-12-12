import React from "react";
import { useState } from "react";
import Layout from "../../components/layout/layout";
import { toast } from 'react-toastify';





const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name, email, phone, address, password)
        toast.success('yeah')
    }


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
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Address"
                value={address}
                onChange={(e)=> setAddress(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
        <img
          src="https://img.freepik.com/free-photo/laptop-shopping-bags-online-shopping-concept_1423-189.jpg?w=1060&t=st=1702304660~exp=1702305260~hmac=794ed4261da8aeefe0b10a0bfb901ba690c6e7e4287ebdfcb2cf0aff0b367403"
          alt="E Commerce Image"
          className="mt-5"
          height={"90%"}
          width={"50%"}
        />
      </div>
    </Layout>
  );
};

export default Register;
