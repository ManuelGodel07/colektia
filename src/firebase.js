import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC48d8-AQSAx5EEH6QFloSeT2JQQyK5w4k",
  authDomain: "colektia-database.firebaseapp.com",
  projectId: "colektia-database",
  storageBucket: "colektia-database.firebasestorage.app",
  messagingSenderId: "399896881211",
  appId: "1:399896881211:web:01c3771bcbab073acc141e",
  measurementId: "G-HB5M73XFB0"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;