import React from 'react';
import { IonPage, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './DailyView.css';

const DailyView: React.FC = () => {
  const timeSlots = [
    '12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM',
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
  ];

  const today = new Date().toLocaleDateString();

  return (
    <IonCard className='daily-view'>
      <IonCardHeader className="ion-text-center">
        <IonCardTitle>Today</IonCardTitle>
        <IonCardSubtitle >{today}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList lines='none' className="time-list">
          {timeSlots.map((slot, index) => (
            <IonItem key={index} lines='none' className="time-slot">
              <IonLabel className="time-label">{slot}</IonLabel>
              <div className="separator"></div>
            </IonItem>
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default DailyView;
