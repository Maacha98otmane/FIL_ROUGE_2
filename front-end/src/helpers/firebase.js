// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEjbrp2tBYhxJu7wBDsGEgiv092-nKeF0",
  authDomain: "filrouge-e8236.firebaseapp.com",
  projectId: "filrouge-e8236",
  storageBucket: "filrouge-e8236.appspot.com",
  messagingSenderId: "985019836996",
  appId: "1:985019836996:web:88f2999a515c2718d96a11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);