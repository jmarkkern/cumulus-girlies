import React, { useState, useRef } from 'react';
import { IonButton, IonIcon, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonPopover } from '@ionic/react';
import { useHistory } from 'react-router-dom';


import pickSvg from '../assets/pick.svg';
import sortSvg from '../assets/sort.svg';
import './TaskSelect.css'; 
import Spinner from '../components/Spinner';
import { calendarOutline } from 'ionicons/icons';
import { alert } from 'ionicons/icons';



const TSelect: React.FC = () => {


  //items on the wheel 
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    { text: 'Club Board Meeting', style: { backgroundColor: '#ACB2D6', textColor: 'black' } },
    { text: 'Run a Mile', style: { backgroundColor: '#FFEBD2', textColor: 'black' } },
    { text: 'Homework 3', style: { backgroundColor: '#ACB2D6', textColor: 'black' } },
    { text: 'Clean Room', style: { backgroundColor: '#FFEBD2', textColor: 'black' } }
  ];



//   navigation btwn upcoming and completed 
  const comp_history = useHistory();
  const handleCompletedClick = () => {
    // Navigate to the "Completed" page
    comp_history.push('/completed');
  };
  const handleUpcomingClick = () => {
    // Navigate to the "Upcoming" page
    comp_history.push('/upcoming');
  };

  
  //sort pop up
  const popover = useRef<HTMLIonPopoverElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = (e: any) => {
    popover.current!.event = e;
    setPopoverOpen(true);
  };

  return (
    <>
      <IonButton  onClick={handleUpcomingClick} >Upcoming</IonButton>
      <IonButton shape="round" onClick={handleCompletedClick} >Completed</IonButton>
      
      {/* Spinner */}
      <IonButton onClick={() => setIsOpen(true)}>
        <IonIcon slot="icon-only" src={pickSvg} style={{ color: '#5372d6', fontSize: '24px' }}></IonIcon>
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

      
      {/* Sort */}
      <IonButton shape="round" onClick={openPopover}>
      <IonIcon slot="icon-only" src={sortSvg} style={{ color: '#ffffff', fontSize: '24px'  }}></IonIcon>
      </IonButton>

      <IonPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
        <IonContent class="ion-padding"> <IonIcon icon={alert} style={{ fontSize: '1rem' }} ></IonIcon>  by Priority</IonContent>
        <IonContent class="ion-padding"> <IonIcon icon={calendarOutline} style={{ fontSize: '1rem' }} ></IonIcon>  by Date</IonContent>
      </IonPopover>

    </>
  );
}

export default TSelect;
