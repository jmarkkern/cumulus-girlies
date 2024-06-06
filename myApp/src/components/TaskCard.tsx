import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './TaskCard.css';

function TCard() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Club Board Meeting</IonCardTitle>
        <IonCardSubtitle>Tuesday, May 17  ||  6:00pm-7:30pm</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>Put Details here</IonCardContent>
    </IonCard>
  );
}
export default TCard;