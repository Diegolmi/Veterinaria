import React from 'react';
import Perro from './images/dogger_img_1.png'
import './style.css'


class Body extends React.Component {

    render() {
        return (
            <>
                <section class="principal site-blocks-cover overflow-hidden bg-light">

                    <div class="col-md-7 align-self-center text-center text-md-left">
                        <div class="intro-text">
                            <h1>DCM PetShop</h1>
                            <h3 class="mb-4">El Shopping online de tu mascota</h3>
                    </div>
                        </div>
                        <div class="col-md-5 align-self-end text-center text-md-right">
                            <img src={Perro} alt="" class="img-fluid cover-img" />
                         </div>
        
                </section>

            </>





        )
    }

}

export default Body