import { Container } from "react-bootstrap";
import pastel from '../assets/img/pastel.PNG';

const HomeComponent = () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Bienvenido a <span className="fw-bold">Happy Cake</span>
            </h1>
            <h6>El lugar de los pasteles felices</h6>
            <img src={pastel} alt="imagen de la torta" />
        </Container>
    );
};

export default HomeComponent;