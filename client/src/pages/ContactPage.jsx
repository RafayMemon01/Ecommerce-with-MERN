import React from 'react';
import Layout from '../components/layout/layout';
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out to us. We are here to help!
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          </div>

          <div className="contact-item">
            <FaMapMarker className="contact-icon" />
            <p>Address: 123 Main Street, Cityville, Country</p>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>Phone: <a href="tel:+123456789">+1 (234) 567-89</a></p>
          </div>
        </div>
        <iframe
          title="Google Map"
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_LONGITUDE!2dYOUR_LONGITUDE!2dYOUR_LATITUDE!3dYOUR_LONGITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xYOUR_LATITUDE_LONGITUDE!2sYour%20Location!5e0!3m2!1sen!2sus!4vYOUR_MAP_API_KEY"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  );
};

export default ContactPage;
