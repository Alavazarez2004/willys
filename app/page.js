import HeaderInicio from '@/components/HeaderInicio'
import NavBar from '@/components/NavBar'
import CuerpoInicio from '@/components/CuerpoInicio'
import FooterInicio from '@/components/FooterInicio'
import React from 'react'



function page() {
  return (
    <div>
      <HeaderInicio/>
      <NavBar/>
      <CuerpoInicio/>
      <FooterInicio/>
    </div>
  )
}

export default page

