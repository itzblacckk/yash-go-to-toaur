import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-cDJY2dAc9VY479ggPUp_DEZJMJijcIY",
  authDomain: "chatwithyash-6e5a3.firebaseapp.com",
  projectId: "chatwithyash-6e5a3",
  storageBucket: "chatwithyash-6e5a3.appspot.com",
  messagingSenderId: "860118961558",
  appId: "1:860118961558:web:f0342e835939e2d8f4e1b7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);