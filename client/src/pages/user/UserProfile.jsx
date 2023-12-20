import React from 'react'
import Layout from '../../components/layout/layout'
import UserMenu from '../../components/layout/UserMenu'
import { useAuth } from '../../context/auth'


const UserProfile = () => {
    const [auth]=useAuth()
  return (
    <Layout title={`Profile - ${auth?.user?.name}`}>
      <div className="container-fluid p-3">
        <div className="row">
            <div className="col-md-3"><UserMenu/></div>
            <div className="col-md-9">
                <div className="card w-75 p-3 mt-4 ">
                    <h4>User Profile</h4>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default UserProfile
