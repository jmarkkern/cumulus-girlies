import React from 'react';
import { IonCard, IonCardTitle, IonCardContent, IonDatetime } from "@ionic/react";
import DailyView from "./DailyView";

const Calendar: React.FC<{calendarMode: string}> = ({ calendarMode }) => {
  let content = null;

  switch (calendarMode) {
    case 'month':
      content = (
        <IonCard className='calendar-page'>
        <IonDatetime presentation='date'></IonDatetime>
        </IonCard>
      );
      break;
    case 'week':
      content = (
        <IonCard className='calendar-page'>
          <IonCardTitle>Week</IonCardTitle>
          <IonCardContent>
            This card will show a week view.
          </IonCardContent>
        </IonCard>
      );
      break;
    case 'day':
      content = (
        <DailyView></DailyView>
      );
      break;
    default:
      content = null;
      break;
  }

  return content;
};

export default Calendar;
