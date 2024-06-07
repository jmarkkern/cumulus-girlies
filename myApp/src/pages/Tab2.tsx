import { IonButton, IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import Calendar from '../components/Calendar';
import { useState } from 'react';
import { calendar, refresh } from 'ionicons/icons';

const Tab2: React.FC = () => {
  const [calendarMode, setCalendarMode] = useState('month');
  const handleChange = (m:string) => {
    setCalendarMode(m);
  }

  return (
    <IonPage className='calendar-page'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calendar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calendar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSegment value="month">
          <IonSegmentButton onMouseUp={() => handleChange('month')} value="month">
            <IonLabel>Month</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton onMouseUp={() => handleChange('week')} value="week">
            <IonLabel>Week</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton onMouseUp={() => handleChange('day')} value="day">
            <IonLabel>Day</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <Calendar calendarMode={calendarMode}></Calendar>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
