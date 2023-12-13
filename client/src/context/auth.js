import { useContext, useState, createContext } from 'react'


const authContext = createContext()


const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    })
    return (
        <authContext.Provider value={[auth, setAuth]}>{children}</authContext.Provider>
    )
}

const useAuth =()=> useContext(authContext)

export { useAuth, AuthProvider }