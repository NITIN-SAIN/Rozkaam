import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfLvxN9Av8lRGPbA_K_zmxu24C59f67iw",
  authDomain: "prject1-bf778.firebaseapp.com",
  projectId: "prject1-bf778",
  storageBucket: "prject1-bf778.firebasestorage.app",
  messagingSenderId: "141257460100",
  appId: "1:141257460100:web:b430dc606814a2f840b5d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app; 