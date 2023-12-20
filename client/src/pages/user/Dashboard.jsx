import React from 'react'
import Layout from '../../components/layout/layout'
import UserMenu from '../../components/layout/UserMenu'
import { useAuth } from '../../context/auth'
 

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout title={`${auth?.user?.name} || Dashboard`}>
      <div className="container-fluid  p-3">
        <div className="row">
          <div className="col-md-3"><UserMenu /></div>
          <div className="col-md-9"><div className="card w-75 p-3 mt-4 ">
              <h4>{auth?.user?.name}</h4>
              <h4>{auth?.user?.email}</h4>
              <h4>{auth?.user?.address}</h4>
            </div></div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
