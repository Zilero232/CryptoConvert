import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

import './assets/scss/style.scss'

initializeApp({
  apiKey: "AIzaSyAVH2nw6LxNY-nYM0P3I6Zga6F5VcbE-yY",
  authDomain: "crypto-a352f.firebaseapp.com",
  projectId: "crypto-a352f",
  storageBucket: "crypto-a352f.appspot.com",
  messagingSenderId: "307152155177",
  appId: "1:307152155177:web:8c8a7f3c799fba0b9ca238",
  measurementId: "G-NLNPZBW0VP",
});

const db = getDatabase();
const starCountRef = ref(db, "crypto");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
