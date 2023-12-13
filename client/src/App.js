
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import PolicyPage from "./pages/PolicyPage";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

import './styles/authStyle.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}   />
        <Route path="/about" element={<AboutPage />}   />
        <Route path="/contact" element={<ContactPage />}   />
        <Route path="/policy" element={<PolicyPage />}   />
        <Route path="/register" element={<Register />}   />
        <Route path="/login" element={<Login />}   />
        <Route path="*" element={<PageNotFoundPage />}   />
      </Routes>
    </>
  );
}

export default App;
