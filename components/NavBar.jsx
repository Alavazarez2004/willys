import React from 'react'
import "../CSS/Inicio.css"
import img1 from "../IMG/logo-willys.png"
import Image from 'next/image'
import Link from 'next/link'

function NavBar() {
  return (
    <div>
        <div class="contenedor">
            <a href="/Vistas/Inicio.html">
            <Image src={img1} height="85px"/>
            </a>
            <button class="button">
                <Link href="/">Inicio</Link>
            </button>
            <button class="button">
                <a href="/vacantes">Vacantes</a>
            </button>
            <button class="button">
                <Link href="/servicios">Servicios</Link>
            </button>
            <button class="button">
                <Link href="/willys">Willys</Link>
            </button>
            <button class="button">
                <a href="/Vistas/Noticias.html">Noticias</a>
            </button>
            <button class="button">
                <a href="/Vistas/Productos.html">Productos</a>
            </button>
            <select class="button" onmouseover="showOptions()" onmouseout="hideOptions()">
                <option>
                    <a href="/Vistas/Contacto.html">Contacto</a>
                </option>
                <option>
                    <a href="/Vistas/Monedero.html">Monedero</a>
                </option>
                <option>
                    <a href="/Vistas/Inmuebles.html">Inmuebles</a>
                </option>
                <option>
                    <a href="/Vistas/Bolsa de trabajo.html">Bolsa de trabajo</a>
                </option>
            </select>
        </div>
    </div>
  )
}

export default NavBar
