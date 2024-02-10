import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonImg, IonLabel, IonButton, IonIcon, IonItem, IonList } from "@ionic/react";
import './NavigationDrawer.css';
const NavigationDrawer : React.FC = () => {
    return (
      <IonMenu contentId="main-content">
        {/* <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        
        <div className="header">
          <div className="header-bg"></div>
              <div className="header-content">
                  <IonImg id="img" src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"></IonImg>
                  <IonLabel>
                    <h2>Username</h2>
                    <p>username@gmail.com</p>
                  </IonLabel>
              </div>
        </div>
        <IonContent>
        <IonList>
        <IonItem>
          <IonLabel>Home</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Add Expense</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>The Legend of Zelda</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Pac-Man</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Super Mario World</IonLabel>
        </IonItem>
      </IonList>
      <div className="action-button">
                <IonButton><IonIcon icon="arrow-back"></IonIcon>Logout</IonButton>
              </div>
        </IonContent>
      </IonMenu>
    );
}

export default NavigationDrawer;