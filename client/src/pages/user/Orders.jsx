import React from 'react'
import UserMenu from '../../components/layout/UserMenu'
import Layout from '../../components/layout/layout'

const Orders = () => {
  return (
    <Layout>
      <div className="container-fluid p-3">
        <div className="row">
            <div className="col-md-3"><UserMenu/></div>
            <div className="col-md-9">
                <div className="card w-75 p-3 mt-4 ">
                    <h4>Orders</h4>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Orders
