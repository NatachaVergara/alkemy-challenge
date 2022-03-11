import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Spinner from '../Spinners/Spinner'

function ModalMensajes({ show, handleClose, modalMsj, isLoggedIn }) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                
                <Modal.Body>{modalMsj} </Modal.Body>
                <Modal.Footer>
                    {!isLoggedIn ? <Button variant="secondary" onClick={handleClose}>
                        Entendido
                    </Button>: null}
                    {!isLoggedIn ? null : <Spinner />}
                    </Modal.Footer>
                
            </Modal>
        </>
    )
}

export default ModalMensajes