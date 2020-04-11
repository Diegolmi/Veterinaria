import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Perro1 from './images/dogger_img_sm_3.jpg';
import Juguetes from './images/perroconpelota.jpg';
// import Perro3 from './images/dogger_img_sm_2.jpg';
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
                        <h2 className="text-black mb-2">Tenemos todo para el bienestar fisico y mental de tu mascota</h2>

                    </div>

                </div>
                <div className="row hover-1-wrap mb-5 mb-lg-0">

                    <div className="mb-4 mb-lg-0 col-lg-6 order-lg-2" data-aos="fade-right">
                        <a href="index.html" className="hover-1">
                            <img src={Perro1} alt="" class="img-fluid" />
                        </a>
                    </div>
                    <div className="col-lg-5 mr-auto text-lg-right align-self-center order-lg-1" data-aos="fade-left">
                        <h2 className="text-black">Veterinaria</h2>
                        <p className="mb-4">Tenemos a los mejores profesionales para el cuidado de tu mascota.</p>
                        <p></p>
                    </div>
                </div>
                <div className="row hover-1-wrap mb-5 mb-lg-0">
                    <div className="col-12">
                        <div className="row">
                            <div className="mb-4 mb-lg-0 col-lg-6" data-aos="fade-left">
                                <a href="tienda.html" className="hover-1">
                                    <img src={Juguetes} alt="" className="img-fluid" />
                                 </a>
                            </div>
                                <div className="col-lg-5 ml-auto align-self-center" data-aos="fade-right">
                                    <h2 className="text-black">Tienda Online</h2>
                                    <p className="mb-4">Porque la salud mental de tu mascota tambien importa</p>
                                    <p><a href="tienda.html" className="btn btn-primary">ir a la tienda</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
            </>




        )

    }

}

export default Section 