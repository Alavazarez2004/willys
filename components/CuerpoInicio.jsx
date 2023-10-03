import React from 'react'
import "../CSS/Inicio.css"
import img1 from '../IMG/descarga.PNG'
import img2 from '../IMG/CapturaFooter.PNG'
import img3 from '../IMG/CapturaFooter1.PNG'
import img4 from '../IMG/CapturaFooter2.PNG'
import img5 from "../IMG/Eslogan.PNG"
import img6 from "../IMG/301581275_413336790939010_3245981492854242766_n.png"
import Image from 'next/image'

function CuerpoInicio() {
  return (
    <div>
        <main>
            <div>
              <Image src={img1} height="555"/>
            </div>
        </main>

        <Image src={img5} height="290"/>

        <Image src={img6} alt="Imagen transparente" class="transparent-image" width="1518" height="1000"/>
        
          <Image src={img2} height="586"/>

          <Image src={img3} height="626"/>

          <Image src={img4} height="626"/>
    
    </div>
  )
}

export default CuerpoInicio

    