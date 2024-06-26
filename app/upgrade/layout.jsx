import React from 'react'
import Header from '../dashboard/_components/Header'
import Footer from '../_components/Footer'

function UpgradeLayout({children}) {
  return (
    <>
    <Header/>
    <div>{children}</div>
    <Footer/>
    </>
    
  )
}

export default UpgradeLayout