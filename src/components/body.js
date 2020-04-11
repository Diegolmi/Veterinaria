import React from 'react';
import Perro from './images/dogger_img_1.png'
import './style.css'


class Body extends React.Component {

    render() {
        return (
            <>
                <div className="principal">
                    <img src={Perro} className="perro1 img-fluid" alt=""  />

                    <div className="col-md-7 align-self-center text-center text-md-left">
                        <div className="intro-text">
                            <p>DCM PetShop <br /> El shopping de tus mascotas</p>
                        </div>

                    </div>
                </div>
            </>





        )
    }

}

export default Body