/* eslint-disable @next/next/no-img-element */
"use client";

import { useContext } from "react";

import { userContext } from "@/contexts/user-context";
import { Github, Google } from "@/components";

import styles from "./page.module.css";

export default function Home() {
  const { user } = useContext(userContext);

  return (
    <main className={styles.main}>
      <h1>Bem-vindo</h1>

      {user && (
        <>
          <img
            src={user.image}
            alt="image"
            width={100}
            style={{ borderRadius: 10 }}
          />
          <h3>
            {user.name} - {user.email}
          </h3>
        </>
      )}

      {!user && (
        <>
          <h3>Escolha uma forma e faça a autenticação dos seus dados</h3>

          <div className={styles.content}>
            <Google />
            <Github />
          </div>
        </>
      )}
    </main>
  );
}
