import React from 'react'
import Layout from '../components/layout/layout'
import { useAuth } from '../context/auth'
// import { json } from 'react-router-dom';
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best Sales"} description={"This is MERN Project Just for practice by Rafay Memon"} author={"Rafay Memon"}>
      <h1>Home Page</h1>
      <pre className="bg-light p-3 rounded">{JSON.stringify(auth)}</pre>
    </Layout>
      
    
  )
}

export default HomePage
