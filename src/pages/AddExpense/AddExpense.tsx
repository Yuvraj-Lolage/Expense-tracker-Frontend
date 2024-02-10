import {
  IonButton,
  IonContent,
  IonInput,
  IonPage,
  IonRippleEffect,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToast,
} from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import "./AddExpense.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddExpense: React.FC = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [payment_method, setPayment_method] = useState("");
  const [note, setNote] = useState("");
  const [expense, setExpense] = useState<{
    title: string;
    amount: string;
    category: string;
    payment_method: string;
    note: string;
  }>({
    title: "",
    amount: "",
    category: "",
    payment_method: "",
    note: "",
  });
  const [categories, setCategories] = useState(null);
  const [successToast, setSuccessToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (
      !expense.title ||
      !expense.amount ||
      !expense.category ||
      !expense.payment_method ||
      !expense.note
    ) {
      console.warn("Values are not sufficient");
      return;
    }

    try {
      axios
        .post("http://localhost:3000/expense", expense)
      
      //no error in POST request
      history.push("/home");
      setSuccessToast(true);
    } catch (error) {
      console.error("Error -> ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        //fetch { category } data from API
        const result = await axios.get("http://localhost:3000/category");
        setCategories(result.data);
        console.log(categories);
      } catch (error) {
        console.error("Error ->", error);
      }
    };

    fetchData();
  }, []);

  return (
    <IonPage>
      <IonContent scrollY={true}>
        <IonToast
          className="success-toast"
          isOpen={successToast}
          message="Expense Added Succesfully.!"
          onDidDismiss={() => setSuccessToast(false)}
          position="top"
          duration={3000}
          buttons={[
            {
              text: "Dismiss",
              role: "cancel",
            },
          ]}
        ></IonToast>

        <IonToast
          className="success-toast"
          isOpen={errorToast}
          message="Error Adding Expense.!"
          onDidDismiss={() => setErrorToast(false)}
          position="top"
          duration={3000}
          buttons={[
            {
              text: "Dismiss",
              role: "cancel",
            },
          ]}
        ></IonToast>
        <section className="text-center my-4">
          <IonText id="title">Add Expense</IonText>
        </section>
        <section id="form-container">
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <IonInput
              type="text"
              fill="outline"
              placeholder="Enter Title"
              name="title"
              clearInput={true}
              className="mb-3 input-field"
              required
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                setExpense({
                  ...expense,
                  title: input.value || "",
                });
              }}
            ></IonInput>
            <IonInput
              type="number"
              fill="outline"
              placeholder="Enter Amount"
              name="amount"
              className="mb-3 input-field"
              required
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                setExpense({
                  ...expense,
                  amount: input.value || "",
                });
              }}
            ></IonInput>
            <IonSelect
              fill="outline"
              placeholder="Select CategoryId"
              name="categoryId"
              className="mb-3 input-field"
              onIonChange={(e) => {
                const input = e.detail.value;
                setExpense({
                  ...expense,
                  category: input || "",
                });
              }}
            >
              {categories ? (
                categories.map((item: { _id: any; category_name: any }) => (
                  <IonSelectOption key={item._id} value={item._id}>
                    {item.category_name}
                  </IonSelectOption>
                ))
              ) : (
                <IonSelectOption>No Category Found</IonSelectOption>
              )}
            </IonSelect>

            <IonSelect
              fill="outline"
              placeholder="Select Payment Method"
              name="payment_method"
              className="mb-3 input-field"
              onIonChange={(e) => {
                const input = e.detail.value;
                setExpense({
                  ...expense,
                  payment_method: input || "",
                });
              }}
            >
              <IonSelectOption value={ "UPI" }>UPI</IonSelectOption>
              <IonSelectOption value={ "Cash" }>Cash</IonSelectOption>
              <IonSelectOption value={ "Debit Card" }>Debit Card</IonSelectOption>
              <IonSelectOption value={ "Credit Card" }>Credit Card</IonSelectOption>
              <IonSelectOption value={ "Bank Transfer" }>Bank Transfer</IonSelectOption>
              <IonSelectOption value={ "RTGS" }>RTGS</IonSelectOption>
            </IonSelect>
            <IonInput
              type="text"
              fill="outline"
              placeholder="Enter note"
              name="note"
              className="mb-3 input-field"
              required
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                setExpense({
                  ...expense,
                  note: input.value || "",
                });
              }}
            ></IonInput>
            <section style={{ textAlign: "center" }}>
              <IonButton className="button my-3" type="submit">
                Add Expense <IonRippleEffect></IonRippleEffect>
              </IonButton>
            </section>
          </form>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default AddExpense;
function useIonToast(): [any] {
  throw new Error("Function not implemented.");
}
