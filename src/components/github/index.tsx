"use client";

import { GrGithub } from "react-icons/gr";
import { useContext } from "react";

import { userContext } from "@/contexts/user-context";
import {
  firebaseAuth,
  githubProvider,
  signInWithPopup,
} from "@/config/firebase";

import styles from "./styles.module.css";

function Component() {
  const { setUser } = useContext(userContext);

  const login = async () => {
    try {
      const { user } = await signInWithPopup(firebaseAuth, githubProvider);

      setUser({
        name: user.displayName || "",
        email: user.email || "",
        image: user?.photoURL || "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.item} onClick={() => login()}>
      <GrGithub size={25} color="#000" />
    </div>
  );
}

export function Github() {
  return <Component />;
}
