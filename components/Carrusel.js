import React from "react";
import Slider from 'react-slick';

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Cambia este valor según tus necesidades
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

return (
    <div>
        <Slider {...settings}>
            <div>
                <img src="../IMG/descarga.PNG" alt="Imagen 1" />
            </div>
            <div>
                <img src="../IMG/descarga1.PNG" alt="Imagen 2" />
            </div>
            <div>
            <img src="../IMG/descarga2.PNG" alt="Imagen 3" />
            </div>
        </Slider>
    </div>
  );
};

export default Carrusel;
