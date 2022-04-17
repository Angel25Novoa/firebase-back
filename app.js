import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  try {
    const docRef = await addDoc(collection(db, "reservaciones"), {
      first: "John",
      last: "Doe",
      email: "example@example.com",
      date: "dd/mm/yyyy",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

const querySnapshot = await getDocs(collection(db, "reservaciones"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});