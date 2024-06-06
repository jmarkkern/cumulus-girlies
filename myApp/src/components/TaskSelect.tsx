import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { heart } from 'ionicons/icons';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import pickSvg from "../assets/pick.svg";
import sortSvg from "../assets/sort.svg"


import './TaskSelect.css';

function TSelect() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <IonButton>Upcoming</IonButton>
      <IonButton shape="round">Completed</IonButton>
      
      <IonButton onClick={handleShow}>
        <IonIcon slot="icon-only" src={pickSvg} ></IonIcon>     
      </IonButton>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pick a</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      <IonButton shape="round">
        <IonIcon slot="icon-only" src={sortSvg}></IonIcon>
      </IonButton>
    </>
  );
}
export default TSelect;