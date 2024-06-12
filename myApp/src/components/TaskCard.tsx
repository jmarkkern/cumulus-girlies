import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonCheckbox,IonIcon } from '@ionic/react';
import { calendarOutline, locationOutline, readerOutline, pencilOutline, alertCircleOutline } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';




import './TaskCard.css';

function TCard() {
    const location = useLocation(); 
    const getBkgColor = () => {
        if (location.pathname === '/completed') {
          return '#7883a3';
        
        } else {
            return '#8294c4';
        }
      };

      const getBtnColor = () => {
        if (location.pathname === '/completed') {
          return '#8eff95';
        
        } else {
            return '#8294c4';
        }
      };

      const getTxtColor = () => {
        if (location.pathname === '/completed') {
          return '#ccd5d4';
        
        } else {
            return '#d7faf5';
        }
      };




  return (
    <IonCard style={{ background: getBkgColor() }}> 
      <IonCardHeader>
        <IonCardTitle style={{ color: getTxtColor() }} ><IonCheckbox labelPlacement="end" style={{ '--checkbox-background': getBtnColor() }} ></IonCheckbox>  Club Board Meeting <IonIcon icon={pencilOutline} style={{ fontSize: '1.2rem' }} ></IonIcon> <IonIcon icon={alertCircleOutline} style={{ fontSize: '1.4rem', color: '#bd0303', paddingLeft: '4.2rem'}} ></IonIcon> </IonCardTitle>
        <IonCardSubtitle> <IonIcon icon={calendarOutline} style={{ fontSize: '1.4rem' }} ></IonIcon> Tuesday, May 17  ||  6:00pm-7:30pm </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent> <IonIcon icon={locationOutline} style={{ fontSize: '1.4rem' }} ></IonIcon> Discord</IonCardContent>
      <IonCardContent> <IonIcon icon={readerOutline} style={{ fontSize: '1.4rem' }} ></IonIcon> Attend meeting and ask club president abt fees</IonCardContent>
    </IonCard>
  );
}
export default TCard;