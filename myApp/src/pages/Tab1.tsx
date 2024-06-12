import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton,IonIcon, IonModal} from '@ionic/react';
import { add } from 'ionicons/icons';
import { Form, Button } from 'react-bootstrap';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';



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

  const [value, setValue] = React.useState([
    dayjs('2024-04-17'),
    dayjs('2024-04-21'),
  ]);



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
               <Form.Label className="mb-3">Create Task</Form.Label>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="email" placeholder="Ex: Open House Viewing" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
        <DemoItem label="Date" component="DateRangePicker">
          <DateRangePicker
            defaultValue={[dayjs('2024-04-17'), dayjs('2024-04-21')]}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>



<Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control type="password" placeholder="Ex: Pacific Palisades" />
              </Form.Group>

              <Form.Label>Priority</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>--select--</option>
                <option value="1">High</option>
                <option value="2">Normal</option>
                <option value="3">Low</option>
              </Form.Select>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Ex: Wear white and bring gifts"/>
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
