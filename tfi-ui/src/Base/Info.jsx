import React from 'react';
import { Modal, Button } from 'react-bootstrap'

export default function ModalMoreInfo({cerrarVentana, ventana}) {
    return(
        <>
        <div modal-dialog-centered >
        <Modal show={ventana} size="lg">

            <Modal.Header >
                <Modal.Title>Reglas del juego</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <a>
                    <img src = {require('../img/reglas.jpg')}/>
                </a>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="dark" onClick= {cerrarVentana}>Cerrar</Button>
            </Modal.Footer>

        </Modal>
        </div>
        </>
    )


}

