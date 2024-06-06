import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import TCard from '../components/TaskCard';
import TSelect from '../components/TaskSelect';
import Spinner from '../components/Spinner';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tasks</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tasks</IonTitle>
          </IonToolbar>
        </IonHeader>

        
        <TSelect /> 
        {/* <Spinner/> */}
        <TCard /> 
        <TCard /> 
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
