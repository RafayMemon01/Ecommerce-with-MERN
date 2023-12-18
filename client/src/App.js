
// import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import PageNotFoundPage from "./pages/PageNotFoundPage";
// import PolicyPage from "./pages/PolicyPage";
// import Register from "./pages/auth/register";
// import Login from "./pages/auth/login";

// import './styles/authStyle.css'
// import Dashboard from "./pages/user/Dashboard";
// import PrivateRoute from "./components/Route/privateRoute";
// import ForgetPassword from "./pages/auth/forgetPassword";
// import AdminRoute from "./components/Route/adminRoute";
// import AdminDashboard from "./pages/Admin/AdminDashboard";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<HomePage />}   />
//         <Route path="/dashboard" element={<PrivateRoute/>}>
//         <Route path="user" element={<Dashboard />}   />
//           </Route>  
//         <Route path="/dashboard" element={AdminRoute}>
//           <Route path="admin" element={<AdminDashboard />}/>" /
//           </Route>  
//         <Route path="/about" element={<AboutPage />}   />
//         <Route path="/contact" element={<ContactPage />}   />
//         <Route path="/policy" element={<PolicyPage />}   />
//         <Route path="/register" element={<Register />}   />
//         <Route path="/login" element={<Login />}   />
//         <Route path="/forget-password" element={<ForgetPassword />}   />
//         <Route path="*" element={<PageNotFoundPage />}   />

//       </Routes>
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import PolicyPage from "./pages/PolicyPage";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

import './styles/authStyle.css';
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Route/privateRoute";
import ForgetPassword from "./pages/auth/forgetPassword";
import AdminRoute from "./components/Route/adminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy" element={<PolicyPage />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/dashboard/*" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/dashboard/admin/*" element={<AdminRoute />}>
          <Route index element={<AdminDashboard />} />
        </Route>

        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
