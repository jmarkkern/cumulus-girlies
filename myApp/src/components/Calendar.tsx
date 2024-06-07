import React from 'react';
import { IonCard, IonCardTitle, IonCardContent } from "@ionic/react";
import DailyView from "./DailyView";

const Calendar: React.FC<{calendarMode: string}> = ({ calendarMode }) => {
  let content = null;

  switch (calendarMode) {
    case 'month':
      content = (
        <IonCard className='calendar-page' id='calendar'>
          <IonCardTitle>Month</IonCardTitle>
          <IonCardContent>
            This card will show a month view.
          </IonCardContent>
        </IonCard>
      );
      break;
    case 'week':
      content = (
        <IonCard className='calendar-page' id='calendar'>
          <IonCardTitle>Week</IonCardTitle>
          <IonCardContent>
            This card will show a week view.
          </IonCardContent>
        </IonCard>
      );
      break;
    case 'day':
      content = (
        <IonCard className='calendar-page' id='calendar' style={{ minHeight: '750px' }}>
          <IonCardTitle>Day</IonCardTitle>
          <IonCardContent>
            This card will show a day view.
          </IonCardContent>
          <DailyView />
        </IonCard>
      );
      break;
    default:
      content = null;
      break;
  }

  return content;
};

export default Calendar;
