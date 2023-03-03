import { Container } from "react-bootstrap";
import { FcCancel } from "react-icons/fc";

const NotFoundComponent= () => {
    return (
        <Container className="pt-5">
            <h1 className="mb-4">La ruta que intentas consultar no existe <FcCancel/></h1>
        </Container>
    );
};

export default NotFoundComponent;
