import React from 'react'
import HeaderInicio from '@/components/HeaderInicio'
import NavBar from '@/components/NavBar'
import CuerpoServicios from '@/components/CuerpoServicios'
import FooterInicio from '@/components/FooterInicio'

function page() {
  return (
    <div>
      <HeaderInicio/>
      <NavBar/>
      <CuerpoServicios/>   
      <FooterInicio/> 
    </div>
  )
}

export default page