import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

const ModalVermas = ({ show, onHide, desc, title }) => {
    return (
        <>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={onHide}>
                    <Modal.Title id="contained-modal-title-vcenter">
                       {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>                   
                    <p className="card-text text-danger text-center" dangerouslySetInnerHTML={{ __html: desc }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalVermas