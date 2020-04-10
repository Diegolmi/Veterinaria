import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';






class Navs extends React.Component {

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">DCM PetShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Quienes Somos</Nav.Link>
                            <NavDropdown title="Consultorio" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.4">Turnos</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Tienda" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Alimento</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Juguetes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Vestimenta</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>





        )
    }

}


export default Navs