import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Perro1 from './images/dogger_img_sm_3.jpg';
import Perro2 from './images/dogger_img_sm_1.jpg';
import Perro3 from './images/dogger_img_sm_2.jpg';
import './style.css';

class Section extends React.Component {

    render() {
        return (
            <>
                <div className="row justify-content-center" data-aos="fade-up">
                    <div className="col-lg-6 text-center heading-section mb-5">
                        <div className="paws">
                            <span className="icon-paw"></span>
                        </div>
                        <h2 className="text-black mb-2">Bienvenido a DCM Petshop</h2>
                        <p>Tenemos todo para el bienestar fisico y mental de tu mascota</p>
                    </div>

                </div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Perro1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Doctores</h3>
                            <p>Encontraras los mejores profesionales para cuidar a tu mascota</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Perro2}     
                           alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Peluqueria</h3>
                            <p>Ofertas unicas en nuestro salon de belleza</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Perro3}
                             alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Peluqueria</h3>
                            <p>Ofertas unicas en nuestro salon de belleza</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>




        )

    }

}

export default Section 