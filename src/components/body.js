import React from 'react';
import Perro from './images/dogger_img_1.png'
import './style.css'


class Body extends React.Component {

    render() {
        return (
            <>
                <div className="principal site-blocks-cover overflow-hidden bg-light">
                    
                    <div className="col-md-7 align-self-center text-center text-md-left">
                        <div className="intro-text">
                            <p>DCM PetShop <br /> El shopping de tus mascotas</p>
                        </div>
                        <div className="col-md-5 align-self-end text-center text-md-right">
                        <img src={Perro} className="perro1 img-fluid cover-img" alt="" />
                    </div>


                    </div>

                </div>

            </>





        )
    }

}

export default Body