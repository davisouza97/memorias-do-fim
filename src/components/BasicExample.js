import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    return (

        <Navbar expand fixed='top' fill className="bg-body-tertiary">
            <Container>
                    <Nav.Link href="#home">Radionovela</Nav.Link>
                    <Nav.Link href="#home">Carta</Nav.Link>
                    <Nav.Link href="#home">Making off</Nav.Link>
                    <Nav.Link href="#home">Escute aqui</Nav.Link>
                    <Nav.Link href="#home">Mapa</Nav.Link>
                    <Nav.Link href="#home">Ficha técnica</Nav.Link>
                    <Nav.Link href="#home">Interação dos sobreviventes</Nav.Link>
                    <Nav.Link href="#home">Memorial</Nav.Link>
            </Container>
        </Navbar>
    );
}

export default BasicExample;