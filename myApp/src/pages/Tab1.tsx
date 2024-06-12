import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton,IonIcon, IonModal} from '@ionic/react';
import { add } from 'ionicons/icons';
import { Form, Button } from 'react-bootstrap';


import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import TCard from '../components/TaskCard';
import TSelect from '../components/TaskSelect';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);



// Render Spinner component

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tasks</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tasks</IonTitle>
          </IonToolbar>
        </IonHeader>

        
        <TSelect /> 
        
       
        <TCard /> 
        <TCard /> 

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={handleShow}>
            <IonIcon icon={add}></IonIcon>
         </IonFabButton>
         </IonFab>

        <IonModal isOpen={showModal} onDidDismiss={handleClose}>
        <IonContent>
          <div style={{ padding: '20px' }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </IonContent>
      </IonModal>



      </IonContent>
    </IonPage>
  );
};

export default Tab1;
