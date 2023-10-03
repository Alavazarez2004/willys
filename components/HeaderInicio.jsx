import React from 'react'
import "../CSS/Inicio.css"
import img1 from "../IMG/285-2859282_icono-telefono-png-blanco-transparent-png-removebg-preview.png"
import img2 from "../IMG/icons8-correo-24.png"
import img3 from "../IMG/icons8-facebook-30.png"
import img4 from "../IMG/icons8-twitter-30.png"
import img5 from "../IMG/png-clipart-daniel036-instagram-behance-el-camaron-loco-inc-aurora-co-angle-white-thumbnail-removebg-preview.png"
import Image from 'next/image'

function HeaderInicio() {
  return (
    <div>
         <header id="header">
        <nav>
            <div id="et-info">
                <span id="et-info-phone">
                    <Image src={img1} height="20"/>
                        <span>800 836 86 82</span>
                </span>
                <a href="mailto:sugerencias@swillys.com.mx">
                    <span id="et-info-email">
                        <Image src={img2} height="24px"/>
                        <span>sugerencias@swillys.com.mx</span>
                    </span>
                </a>
                <ul class="et-social-icons1">
                    <li>
                        <a href="https://www.facebook.com/AbarrotesWillysOficial/" class="icon">
                            <Image src={img3} height="27px"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/AbarrotesWillys" class="icon">
                            <Image src={img4} height="25px"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/superwillys?utm_medium=copy_link" class="icon">
                            <Image src={img5} height="32"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default HeaderInicio
