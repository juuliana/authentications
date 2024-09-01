import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  appId: process.env.FIREBASE_APP,
  apiKey: process.env.FIREBASE_KEY,
  projectId: process.env.FIREBASE_PROJECT,
  authDomain: process.env.FIREBASE_DOMAIN,
  storageBucket: process.env.FIREBASE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER,
};

const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const githubProvider = new GithubAuthProvider();

export { firebaseAuth, githubProvider, signInWithPopup };
