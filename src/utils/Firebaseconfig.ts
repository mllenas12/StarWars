import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const Firebaseconfig = {
    apiKey: "AIzaSyAGAXuTRWZLi9ENhQysXOrVuNjXIY9h0gU",
    authDomain: "starwarsfirebase-5061f.firebaseapp.com",
    projectId: "starwarsfirebase-5061f",
    storageBucket: "starwarsfirebase-5061f.appspot.com",
    messagingSenderId: "651261275813",
    appId: "1:651261275813:web:2e1905f5664f52af6ea74c"
};

const app = initializeApp(Firebaseconfig);
export const auth = getAuth(app)

