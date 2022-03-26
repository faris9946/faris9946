import React from 'react'
import Header from './header'
import Footer from '../components/footer'


const Layout = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/> 
    </div>
  )
}

export default Layout
