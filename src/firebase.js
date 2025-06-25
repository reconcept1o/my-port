import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsrFPWc5_GLEt0yNrlbJW7FPhtyhXE1HE",
  authDomain: "reconceptx-80432.firebaseapp.com",
  projectId: "reconceptx-80432",
  storageBucket: "reconceptx-80432.firebasestorage.app",
  messagingSenderId: "574884802150",
  appId: "1:574884802150:web:e46cc05b17110f0a0807a7",
  measurementId: "G-0PBZ7QKMFZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app); // Analytics isteğe bağlı
