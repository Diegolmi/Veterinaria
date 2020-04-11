import React, { Component } from 'react';
import '../components/style.css';

class Formulario extends Component {
    constructor() {
        super();
        this.state =
        {
            turno: {
                mascota: "",
                dueño: "",
                fechas: "",
                horas: "",
                sintoma: "",
            },
            lista: [],
        };
    }

    agregarCita = evt => {
        evt.preventDefault();

        this.setState({
            lista: [...this.state.lista, this.state.turno
            ]

        }, () => {
            console.log(this.state.lista);
        })


    }
    actualizarState = evt => {
        this.setState({
            turno: {
                ...this.state.turno,
                [evt.target.name]: evt.target.value
            }
        });
    }



    render() {
        return (
            <>

                <div className="row justify-content-center" data-aos="fade-up">
                    <div className="col-lg-6 text-center heading-section mb-5">

                        <h2 className="text-black mb-2">Consultorio</h2>

                    </div>

                </div>

                <h1> Administrador pacientes veterinaria</h1>

                <div className="inputDatos_header">
                    <h3>Formulario para crear Turnos</h3>

                </div>


                <form onSubmit={this.agregarCita} >
                    <div className="inputDatos">

                        <div className="inputDatos_body">
                            <label>Nombre de Mascota :</label>
                            <input
                                type="text"
                                className="nombreMascota"
                                placeholder="ingrese el nombre"
                                name="mascota"
                                onChange={this.actualizarState}
                            />
                            <br />
                            <label>Nombre del Dueño:</label>
                            <input
                                type="text"
                                className="nombreDueño"
                                placeholder="ingrese el nombre"
                                name="dueño"
                                onChange={this.actualizarState}
                            />
                            <br />
                            <label> Fecha:</label>
                            <input type="date"
                                className="fecha"
                                name="fechas"
                                onChange={this.actualizarState} />
                            <br />

                            <label>Hora:</label>
                            <input
                                type="time"
                                className="hora"
                                name="horas"
                                onChange={this.actualizarState} />
                            <br />
                            <label>Sintomas:</label>
                            <input
                                type="text"
                                className="sintomas"
                                placeholder="describir sintomas"
                                name="sintoma"
                                onChange={this.actualizarState} />

                        </div>

                        <div className="inputDatos_footer">
                            <button
                                type="submit"
                                className="boton">Agregar nueva cita</button>
                        </div>

                    </div>
                </form>
                <div className="citas">
                    {
                        this.state.lista.map(cita => (
                            <div key={cita} className="cardCita">
                                <div className="inputTurno_header">
                                    <div className="titulo"> <h2>citas</h2></div>
                                    <p>Mascota: {cita.mascota}<br /></p>
                                    <p> Dueño:{cita.dueño}<br /></p>
                                    <p>Fecha:{cita.fechas}<br /></p>
                                    <p>Hora:{cita.horas}<br /></p>
                                    <p>Sintomas:{cita.sintoma}<br /></p>
                                </div>

                                <div className="inputTurno_footer">
                                    <button type="button">Borrar</button>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </>
        );
    }




}

export default Formulario;