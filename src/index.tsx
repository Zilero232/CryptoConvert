import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./assets/scss/style.scss";

initializeApp({
  apiKey: "AIzaSyAVH2nw6LxNY-nYM0P3I6Zga6F5VcbE-yY",
  authDomain: "crypto-a352f.firebaseapp.com",
  projectId: "crypto-a352f",
  storageBucket: "crypto-a352f.appspot.com",
  messagingSenderId: "307152155177",
  appId: "1:307152155177:web:8c8a7f3c799fba0b9ca238",
  measurementId: "G-NLNPZBW0VP",
});

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
