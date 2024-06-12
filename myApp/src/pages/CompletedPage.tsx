import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './CompletedPage.css';
import TSelect from '../components/TaskSelect';
import TCard from '../components/TaskCard';

const CompletedPage: React.FC = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Completed Tasks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Completed Tasks</IonTitle>
          </IonToolbar>
        </IonHeader>

        <TSelect /> 
        <TCard /> 

        
      </IonContent>
    </IonPage>
  );
};

export default CompletedPage;