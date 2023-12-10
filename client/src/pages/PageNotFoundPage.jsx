import React from 'react'
import Layout from '../components/layout/layout'
import { NavLink } from 'react-router-dom'

const PageNotFoundPage = () => {
  return (
    <Layout>
        <h1>Page Not Found</h1>
        <p>This page does not exist</p>
<p>Please go back to the <NavLink to={'/'}>Homepage</NavLink> </p>
    </Layout>
  )
}

export default PageNotFoundPage
