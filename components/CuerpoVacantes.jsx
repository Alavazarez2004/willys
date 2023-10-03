import React from 'react'
import img1 from '../IMG/Entrale.png'
import img2 from '../IMG/botoncrear.png'
import img3 from '../IMG/botoninicia.png'
import img4 from '../IMG/Modelo1.png'
import img5 from '../IMG/Modelo2.png'
import img6 from '../IMG/Modelo3.png'
import img7 from '../IMG/coma.jpg'
import img8 from '../IMG/willys.jpg'
import img9 from '../IMG/surticoma.jpg'
import img10 from '../IMG/botoncoma.png'
import img11 from '../IMG/botonwillys.png'
import img12 from '../IMG/botonsurticoma.png'
import "../CSS/Vacantes.css"
import Image from 'next/image'


function CuerpoVacantes() {
  return (
    <div>
      <div className="container body-content">
        <center>
          <div className="d-flex flex-column">
            <div className="text-center">
              <h1 className="font-weight-bold">BOLSA DE TRABAJO</h1>
            </div>
            <div className="row">
              <div className="col1">
                <Image src={img1}/>
              </div>
              <div className="font-weight-bold1">
                <h1>y trabaja<br />con nosotros</h1>
              </div>
            </div>
          </div>
          <h3>
            ¡Bienvenido! Estás en la página de reclutamiento.<br />Para postularte crea una cuenta. Si ya la tienes, inicia sesión.
          </h3>
          <div className="d-flex flex-column1">
            <div className="row1">
              <div className="col">
                <Image src={img2}/>
              </div>
            </div>
            <div className="row2">
              <div className="col">
                <Image src={img3}/>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column1">
            <br />
          </div>
          <div className="d-flex flex-column1">
            <div className="row">
              <div className="col3">
                <Image src={img4}/>
                <div>&nbsp;</div>
                <div className='col6'>
                  <Image src={img7}/>
                  <div className='col9'>
                    <Image src={img10}/><br/><br/>
                  </div>
                </div>
              </div>
              <div className="col4">
                <Image src={img5}/>
                <div>&nbsp;</div>
                <div className='col7'>
                  <Image src={img8}/>
                  <div className='col10'>
                    <Image src={img11}/><br/><br/>
                  </div>
                </div>
              </div>
              <div className="col5">
                <Image src={img6}/>
                <div>&nbsp;</div>
                <div className='col8'>
                  <Image src={img9}/>
                  <div className='col11'> 
                    <Image src={img12}/><br/><br/>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default CuerpoVacantes
