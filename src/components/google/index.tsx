"use client";

import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { userContext } from "@/contexts/user-context";

import styles from "./styles.module.css";

function Component() {
  const { setUser } = useContext(userContext);

  const login = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      const { data } = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${access_token}` } }
      );

      setUser({ name: data.name, email: data.email, image: data.picture });
    },
    flow: "implicit",
  });

  return (
    <div className={styles.item} onClick={() => login()}>
      <FcGoogle size={25} />
    </div>
  );
}

export function Google() {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT as string}>
      <Component />
    </GoogleOAuthProvider>
  );
}
