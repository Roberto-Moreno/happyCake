import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcAssistant } from "react-icons/fc";
import {FcHome} from "react-icons/fc";
import {FcShop} from "react-icons/fc";

export default function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-start">
                    <Link to="/" className="text-decoration-none text-white ms-5"><FcHome/>Home</Link>
                    <Link to="/contacto" className="text-decoration-none text-white ms-5"><FcAssistant/>Contacto</Link>
                    <Navbar.Brand className="ms-5"><FcShop/>Happy Cake</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}