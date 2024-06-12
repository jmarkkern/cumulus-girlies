import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Account</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Notifications</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Appearence</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Support</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>About</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Log Out</IonCardTitle>
          </IonCardHeader>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
