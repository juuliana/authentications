import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER,
};

const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const githubProvider = new GithubAuthProvider();

export { firebaseAuth, githubProvider, signInWithPopup };
