import React from 'react'
import HeaderInicio from '@/components/HeaderInicio'
import NavBar from '@/components/NavBar'
import CuerpoWillys from '@/components/CuerpoWillys'
import FooterInicio from '@/components/FooterInicio'

function page() {
  return (
    <div>
    <HeaderInicio/>
    <NavBar/>
    <CuerpoWillys/>  
    <FooterInicio/>    
    </div>
  )
}

export default page