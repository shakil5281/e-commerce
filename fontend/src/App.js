import React from 'react'
import { Outlet } from 'react-router-dom';
const Header = React.lazy(()=> import('./components/layout/Header'))
const Footer = React.lazy(()=> import('./components/layout/Footer'))

const App = () => {
  return (
    <>
        <Header/>
          <Outlet />
        <Footer/>
    </>
  )
}

export default App