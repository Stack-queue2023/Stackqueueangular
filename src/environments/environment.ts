import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const firebaseConfig = {
  apiKey: "AIzaSyB67-uaAHy0FhcOaAee5rTrAPGg8XiNiqo",
  authDomain: "stack-queue-40c6a.firebaseapp.com",
  projectId: "stack-queue-40c6a",
  storageBucket: "stack-queue-40c6a.appspot.com",
  messagingSenderId: "124634298934",
  appId: "1:124634298934:web:a3c624f1288f2545697697",
  measurementId: "G-DS9H2JRWD7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
