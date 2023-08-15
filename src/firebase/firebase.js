import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  databaseURL:
    "https://learnlingo-project-default-rtdb.europe-west1.firebasedatabase.app/",

  apiKey: "AIzaSyAw9-LDUKOzMFUHun3SsjB76kw0g2_ElA0",
  authDomain: "learnlingo-project.firebaseapp.com",
  projectId: "learnlingo-project",
  storageBucket: "learnlingo-project.appspot.com",
  messagingSenderId: "727258100803",
  appId: "1:727258100803:web:a7a67c908b0316157fd0f6",
  measurementId: "G-VFSQ9CYMSF"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);


