import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Loader = () => {
    const [count,setCount]=useState(5)
    const navigate = useNavigate()
    const location=useLocation()

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((prev)=>prev-1)
        },1000)
        count===0 && navigate("/login", {
            state: location.pathname,
        })
        return ()=>clearInterval(interval)
// eslint-disable-next-line react-hooks/exhaustive-deps

    },[count,navigate])
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center"
      style={{height:"100vh"}}>
  <div className="spinner-border" role="status">
    <span className="sr-only"></span>
  </div>
    <h1>You are redirecting in {count} sec</h1>
</div>

    </>
  )
}

export default Loader
