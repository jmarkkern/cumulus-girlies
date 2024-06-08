import React, { useState } from 'react';
import { IonButton, IonIcon, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonButtons } from '@ionic/react';
import pickSvg from '../assets/pick.svg';
import sortSvg from '../assets/sort.svg';
import './TaskSelect.css'; 
import Spinner from '../components/Spinner';

const TSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    { text: 'Club Board Meeting', style: { backgroundColor: '#ACB2D6', textColor: 'black' } },
    { text: 'Run a Mile', style: { backgroundColor: '#FFEBD2', textColor: 'black' } },
    { text: 'Homework 3', style: { backgroundColor: '#ACB2D6', textColor: 'black' } },
    { text: 'Clean Room', style: { backgroundColor: '#FFEBD2', textColor: 'black' } }
  ];

  return (
    <>
      <IonButton>Upcoming</IonButton>
      <IonButton shape="round">Completed</IonButton>
      
      <IonButton onClick={() => setIsOpen(true)}>
        <IonIcon slot="icon-only" src={pickSvg}></IonIcon>
      </IonButton>

      <IonModal isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Help Getting Started?</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <Spinner data={data} />
        </IonContent>
      </IonModal>
      
      
      <IonButton shape="round">
        <IonIcon slot="icon-only" src={sortSvg}></IonIcon>
      </IonButton>
    </>
  );
}

export default TSelect;
