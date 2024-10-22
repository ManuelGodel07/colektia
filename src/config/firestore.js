import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC48d8-AQSAx5EEH6QFloSeT2JQQyK5w4k",
    authDomain: "colektia-database.firebaseapp.com",
    projectId: "colektia-database",
    storageBucket: "colektia-database.appspot.com",
    messagingSenderId: "399896881211",
    appId: "1:399896881211:web:01c3771bcbab073acc141e",
    measurementId: "G-HB5M73XFB0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)