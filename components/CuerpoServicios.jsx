import Link from "next/link"
import "../CSS/Servicios.css"
import img2 from "../IMG/Servicios.PNG"
import img3 from "../IMG/PagoServicios.PNG"
import img4 from "../IMG/PagoServicios1.PNG"
import img5 from "../IMG/PagoServicios2.PNG"
import img6 from '../IMG/CapturaFooter2.PNG'
import Image from 'next/image'
import React from "react"

function CuerpoServicios() {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
            <Image src={img2} height="402"/>

            <Image src={img3} height="592"/>

            <Image src={img4} height="423"/>

            <Image src={img5} height="427"/>

            <Image src={img6} height="626"/>

    </div>
  )
}

export default CuerpoServicios
