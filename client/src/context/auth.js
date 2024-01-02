import { useContext, useState, createContext, useEffect } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
 const [auth, setAuth] = useState({
    user: null,
    token: "",
 });
 useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth((prevAuth) => ({
        ...prevAuth,
        user: parseData.user,
        token: parseData.token,
      }));
    }
 }, []);
 return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
 );
};

const useAuth = () => useContext(authContext);

const useConfig = () => {
  const [auth] = useAuth();
  const token = auth?.token;
  return {
    headers: {
      Authorization: `${token}`,
    },
  };
};

export { useAuth, AuthProvider, useConfig };
