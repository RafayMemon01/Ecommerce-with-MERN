import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
  return (
    <>
      <Header />
      <main style={{minHeight:'80vh'}}>
     {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
