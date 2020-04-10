import React from 'react';
import Perro from './images/dogger_img_1.png'
import './style.css'


class Body extends React.Component {

    render() {
        return (
            <>
                <div className="principal">
                    <img src={Perro} className="perro1" alt="150px" />

                    <div className="col-md-7 align-self-center text-center text-md-left">
                        <div className="intro-text">
                            <h1>DCM PetShop<span class="d-md-block">El shopping de tus mascotas</span></h1>
                        </div>

                    </div>
                </div>
            </>





        )
    }

}

export default Body