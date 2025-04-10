import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQPi_1mVyVgVCUm0efg2jSQH4NX45Lgcc",
  authDomain: "fir-auth-1e829.firebaseapp.com",
  projectId: "fir-auth-1e829",
  storageBucket: "fir-auth-1e829.firebasestorage.app",
  messagingSenderId: "282372862056",
  appId: "1:282372862056:web:fcaab2f7c0fb140e298bdd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar a Autenticação do Firebase e criar uma referência para gerenciarmos a autenticação (login, logout, estado do usuário)
export const auth = getAuth(app);
