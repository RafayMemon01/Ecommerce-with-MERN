import React from 'react';
import Layout from '../components/layout/layout';
import { FaUser, FaInfoCircle } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <Layout title={"ABOUT US - E COMMERCE"} description={"This is MERN Project Just for practice by Rafay Memon"} author={"Rafay Memon"}>
      <div className="about-container">
        <h1>About Our E-Commerce Store</h1>
        <p>
          Welcome to our online store! At [Your Store Name], we are committed to providing an exceptional shopping experience for our customers.
        </p>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <FaUser className="team-member-icon" />
            <p>John Doe - Founder & CEO</p>
          </div>

          <div className="team-member">
            <FaUser className="team-member-icon" />
            <p>Jane Smith - Co-founder & CTO</p>
          </div>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality products, excellent customer service, and a seamless online shopping experience. We are dedicated to continuously improving and innovating to meet the evolving needs of our customers.
          </p>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <p>
            - Customer Satisfaction: We prioritize the satisfaction of our customers by offering top-notch products and services.<br />
            - Integrity: We conduct our business with honesty, transparency, and ethical practices.<br />
            - Innovation: We embrace innovation to stay ahead in the ever-changing e-commerce landscape.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
