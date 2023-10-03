import React from 'react'
import img1 from "../IMG/icons8-facebook-30.png"
import img2 from "../IMG/icons8-twitter-30.png"
import img3 from "../IMG/png-clipart-daniel036-instagram-behance-el-camaron-loco-inc-aurora-co-angle-white-thumbnail-removebg-preview.png"
import img7 from "../IMG//Footer.PNG"
import Image from 'next/image'
import "../CSS/Inicio.css"

function FooterInicio() {
  return (
    <div>
        <Image src={img7} style={{width:'100%',height:'100%'}}/>

       <footer>
        <ul class="et-social-icons">
            <li>
                <a href="https://www.facebook.com/AbarrotesWillysOficial/" class="icon">
                    <Image src={img1}/>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/AbarrotesWillys" class="icon">
                    <Image src={img2}/>
                </a>
            </li>
            <li>
                <a href="https://instagram.com/superwillys?utm_medium=copy_link" class="icon">
                    <Image src={img3} height="30"/>
                </a>
            </li>
        </ul>
        <button id="scrollToTopBtn" class="scroll-to-top">
            <img src="/IMG/44674.png"/>
        </button>
    </footer>
    </div>
  )
}

export default FooterInicio
