import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationDrawer from "../components/NavigationDrawer/NavigationDrawer";

const Home: React.FC = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get("http://localhost:3000/expense");

        setData(response.data); // Assuming the response is JSON data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {/* <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu> */}
    <NavigationDrawer/>

      
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
        <IonMenuToggle slot="start" >
              <IonMenuButton id="hamburger-menu"></IonMenuButton>
            </IonMenuToggle>
          <IonTitle>Backend Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        {data ? (
          data.map((item: { title: any; amount: any; category_name: any }) => (
            <IonCard>
              <IonCardContent id="card-content">
                <div className="card-img">
                  <IonImg src="https://images.freeimages.com/vhq/images/previews/3d3/coffee-mug-icon-orange-background-121341.png"></IonImg>
                </div>
                <div className="card-text">
                  <IonCardTitle>{ item.title }</IonCardTitle>
                  <IonText>
                    { item.category_name }
                  </IonText>
                </div>
                <div className="expense-amt">
                  <IonText>-{ item.amount }</IonText>
                </div>
              </IonCardContent>
            </IonCard>
          ))
        ) : (
          <div className="spinner-container">
            <div className="spinner-border text-danger" role="status">
            <span className="sr-only"></span>
          </div>
          </div>
        )}
      </IonContent>
    </IonPage>
    </>
  );
};

export default Home;
