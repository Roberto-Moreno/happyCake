import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function TextControlsExample() {
    return (
        <Container className="text-center mt-4">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo : </Form.Label>
                    <Form.Control type="email" placeholder="correo-electronico" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripcion : </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button variant="primary">Enviar</Button>
        </Container>
    );
}

export default TextControlsExample;