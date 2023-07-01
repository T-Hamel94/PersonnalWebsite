import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmationModal = ({ show, onHide, onConfirm, message, action }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          {action}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
