import React from 'react';
import Perro from './images/dogger_img_1.png'
import './style.css'


class Body extends React.Component {

    render() {
        return (
            <>
                <section className="site-blocks-cover overflow-hidden bg-light">

                    <div className="col-md-7 align-self-center text-center text-md-left">
                        <div className="intro-text">
                            <h1>DCM PetShop</h1>
                            <h5 className="mb-4">El shopping online de tus mascotas</h5>
                                
                        </div>
                            <div className="col-md-5 align-self-end text-center text-md-right">
                                <img src={Perro} alt="" className="img-fluid cover-img" />

                            </div>
                    </div>
                </section>

            </>





        )
    }

}

export default Body