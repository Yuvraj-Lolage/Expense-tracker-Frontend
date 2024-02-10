import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonLoading,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Home.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
          data.map((item: { title: any; amount: any; category: any, amount:any }) => (
            <IonCard className="my-2">
              <IonCardContent id="card-content">
                <div className="card-img">
                  <IonImg src="https://images.freeimages.com/vhq/images/previews/3d3/coffee-mug-icon-orange-background-121341.png"></IonImg>
                </div>
                <div className="card-text">
                  <IonCardTitle>{ item.title }</IonCardTitle>
                  <IonText>
                    { item.category }
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
  );
};

export default Home;
