import React from 'react';
import Perro1 from './images/dogger_img_sm_5.jpg';
import Perro2 from './images/dogger_img_sm_4.jpg';
import Perro3 from './images/dogger_img_sm_6.jpg';
import Perro4 from './images/dogger_img_sm_3.jpg';
import './style.css';

class Tienda extends React.Component {

    render() {
        return (
            <>
                <div className="row justify-content-center" data-aos="fade-up">
                    <div className="col-lg-6 text-center heading-section mb-5">

                        <h2 className="text-black1 mb-2">Tienda Online</h2>

                    </div>

                </div>
                <div className="tienda">

                    <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                        <div className="product d-flex flex-column">
                            <a href="#" className="img-prod"><img className="img-fluid" src={Perro2} alt="" />
                                <span className="status">Oferta</span>
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3">
                                <div className="d-flex">
                                    <div className="cat">
                                        <span>Collar</span>
                                    </div>
                                    <div className="rating">
                                        <p className="text-right mb-0">
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                        </p>
                                    </div>
                                </div>
                                <h3><a href="#">Precio Online</a></h3>
                                <div className="pricing">
                                    <p className="price"><span className="mr-2 price-dc">$120.00</span></p>
                                </div>
                                <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Agregar al Carrito <i className="ion-ios-add ml-1"></i></span></a>
                                    <a href="#" className="buy-now text-center py-2">Comprar<span><i className="ion-ios-cart ml-1"></i></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                        <div className="product d-flex flex-column">
                            <a href="#" className="img-prod"><img className="img-fluid" src={Perro1} alt="" />
                                <span className="status">50% Off</span>
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3">
                                <div className="d-flex">
                                    <div className="cat">
                                        <span>Juguete</span>
                                    </div>
                                    <div className="rating">
                                        <p className="text-right mb-0">
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                        </p>
                                    </div>
                                </div>
                                <h3><a href="#">Hueso de plastico</a></h3>
                                <div className="pricing">
                                    <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale"></span></p>
                                </div>
                                <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Agregar a Carrito <i className="ion-ios-add ml-1"></i></span></a>
                                    <a href="#" className="buy-now text-center py-2">Comprar<span><i className="ion-ios-cart ml-1"></i></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                        <div className="product d-flex flex-column">
                            <a href="#" className="img-prod"><img className="img-fluid" src={Perro3} alt="" />
                                <span className="status">Oferta!!</span>
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3">
                                <div className="d-flex">
                                    <div className="cat">
                                        <span>Peluqueria</span>
                                    </div>
                                    <div className="rating">
                                        <p className="text-right mb-0">
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                        </p>
                                    </div>
                                </div>
                                <h3><a href="#">Corte de pelo</a></h3>
                                <div className="pricing">
                                    <p className="price"><span className="mr-2 price-dc">$300.00</span><span className="price-sale"></span></p>
                                </div>
                                <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Agregar Carrtio <i className="ion-ios-add ml-1"></i></span></a>
                                    <a href="#" className="buy-now text-center py-2">Comprar<span><i className="ion-ios-cart ml-1"></i></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                        <div className="product d-flex flex-column">
                            <a href="#" className="img-prod"><img className="img-fluid" src={Perro4} alt="" />
                                <span className="status">15% Off</span>
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3">
                                <div className="d-flex">
                                    <div className="cat">
                                        <span>Vacunas</span>
                                    </div>
                                    <div className="rating">
                                        <p className="text-right mb-0">
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                                        </p>
                                    </div>
                                </div>
                                <h3><a href="#">Vacunas recien nacido</a></h3>
                                <div className="pricing">
                                    <p className="price"><span className="mr-2 price-dc">$500.00</span><span className="price-sale"></span></p>
                                </div>
                                <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Agregar Carrito <i className="ion-ios-add ml-1"></i></span></a>
                                    <a href="#" className="buy-now text-center py-2">Comprar<span><i className="ion-ios-cart ml-1"></i></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        )
    }



}

export default Tienda