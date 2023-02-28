import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
const Header = React.lazy(()=> import('./components/layout/Header'))
const Footer = React.lazy(()=> import('./components/layout/Footer'))

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
          <Outlet />
        <Footer/>
      </Suspense>
    </>
  )
}

export default App