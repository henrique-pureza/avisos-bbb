import React, {useState, useRef} from "react";
import {Card, Container, Form, Button, ButtonGroup, ToggleButton} from "react-bootstrap";
import "./style.css";
import Aviso from "./screens/Aviso/View.jsx";
import campainhaCurta from "./assets/campainhaCurta.mp3";
import logo from "./assets/bbbLogo.png";
import reactLogo from "./assets/reactLogo.svg";

export default function Home() {
    const [punicao, setPunicao] = useState(false);
    const [nomeParticipante, setNomeParticipante] = useState("");
    const [aviso, setAviso] = useState("");
    const [visible, setVisible] = useState(false);
    const audio = useRef();

    function handleInputChange(e) {
        if (e.target.id === "nome") {
            setNomeParticipante(e.target.value.toUpperCase());
        } else if (e.target.id === "aviso") {
            setAviso(e.target.value.toUpperCase());
        }
    }

    function exibirAviso() {
        audio.current.play();
        setVisible(true);
        if (document.fullscreenEnabled) {
            document.documentElement.requestFullscreen();
        }
    }

    document.addEventListener("keydown", (e) => {
       if (e.key === "Escape") {
        setVisible(false);
       }
    });

    return(
        <Container className="vw-100 vh-100 d-flex justify-content-center align-items-center">
            <Card>
                <Card.Header>
                    <Card.Title className="fs-1 d-flex justify-content-center align-items-center mb-3">
                        <img src={logo} alt="Big Brother Brasil: Avisos" width="177" height="100" className="me-3" />
                        +
                        <img src={reactLogo} alt="Programa feito em React.js" width="150" height="150" className="react-logo" />
                        = <b className="ms-3"><i><u>Avisos BBB</u></i></b>
                    </Card.Title>
                    <Card.Subtitle className="fs-6" style={{textAlign: "justify"}}>
                        Programa feito em React.js que simula os avisos exibidos pela produção do Big Brother Brasil através das televisões espalhadas pela casa.
                    </Card.Subtitle>
                </Card.Header>

                <Card.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nome do participante"
                            id="nome"
                            value={nomeParticipante}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Aviso</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Aviso/punição"
                            id="aviso"
                            value={aviso}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="d-flex flex-column">
                        <Form.Label>Tipo de aviso</Form.Label>
                        <ButtonGroup>
                            <ToggleButton
                                type="radio"
                                variant={punicao ? "outline-primary" : "primary"}
                                onClick={() => setPunicao(!punicao)}
                            >
                                Aviso (retângulo amarelo piscante)
                            </ToggleButton>
                            <ToggleButton
                                type="radio"
                                variant={punicao ? "danger" : "outline-danger"}
                                onClick={() => setPunicao(!punicao)}
                            >
                                Punição (retângulo vermelho piscante)
                            </ToggleButton>
                        </ButtonGroup>
                    </Form.Group>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-center align-items-center">
                    <Button variant="primary" onClick={exibirAviso}>Exibir aviso</Button>
                </Card.Footer>
            </Card>

            <Aviso nome={nomeParticipante} aviso={aviso} punicao={punicao} visible={visible} />

            <audio ref={audio}>
                <source src={campainhaCurta} />
            </audio>
        </Container>
    );
}
