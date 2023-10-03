import React from 'react'
import "../CSS/Willys.css"
import img1 from "../IMG/Willys.PNG"
import img2 from "../IMG/Willys2.PNG"
import img3 from '../IMG/CapturaFooter2.PNG'
import Image from 'next/image'


function CuerpoWillys() {
  return (
    <div>
        <div>
          <Image src={img1} height="410"/>
        </div>

        <div>
          <Image src={img2} height="478"/>
        </div>

        <div id="video">
            <iframe width="960" height="715" src="https://www.youtube.com/embed/PVVp6aUycRU?si=CXbSlFem99zBjhf0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <Image src={img3} height="626"/>

    </div>
  )
}

export default CuerpoWillys
