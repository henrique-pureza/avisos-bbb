import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";
import "./aviso.css";

export default function Aviso(props) {
    const nome = props.nome;
    let aviso = props.aviso;
    const punicao = props.punicao;
    let visible = props.visible;
    let color;
    if (punicao) {
        color = "#CC0000";
    } else {
        color = "#AAAA00";
    }

    const [displayColor, setDisplayColor] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayColor(!displayColor);
        }, 500);
        return () => clearInterval(intervalId);
    }, [displayColor]);

    return(
        <Container fluid className="vw-100 fundo m-0" style={
            {
                display: visible ? "block" : "none",
                position: visible ? "fixed" : "static",
                height: visible ? "100vh" : "0"
            }
        }>
            <Container fluid className="w-100 h-100 fundo-body p-0">
                <Container fluid className="h-25 nome-container">
                    <p className="nome m-0 text-white">{nome}</p>
                </Container>
                <Container fluid className="h-75 w-100 container-intermediario p-0 d-flex align-items-center flex-grow-1">
                    <Container fluid className="aviso-container p-4" style={{backgroundColor: displayColor ? color : "transparent"}}>
                        <pre className="aviso m-0 text-white">{aviso}</pre>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}
