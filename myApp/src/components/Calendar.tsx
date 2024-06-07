import { IonCard, IonHeader, IonButton, IonCardTitle, IonCardContent, IonDatetime } from "@ionic/react";


const Calendar: React.FC<{calendarMode:string}> = (m) => {
    switch (m.calendarMode) {
        case 'month': return (
            <IonCard className='calendar-page' id='calendar'>
                <IonCardTitle>Month</IonCardTitle>
                <IonCardContent>
                    This card will show a month view.
                </IonCardContent>
            </IonCard>
        );
        case 'week': return (
            <IonCard className='calendar-page' id='calendar'>
                <IonCardTitle>Week</IonCardTitle>
                <IonCardContent>
                    This card will show a week view.
                </IonCardContent>
            </IonCard>
        );
        case 'day': return (
            <IonCard className='calendar-page' id='calendar'>
                <IonCardTitle>Day</IonCardTitle>
                <IonCardContent>
                    This card will show a day view.
                </IonCardContent>
            </IonCard>
        );
    }
};

export default Calendar;