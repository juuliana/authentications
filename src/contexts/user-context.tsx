"use client";

import React, { createContext, useState } from "react";

type TUser = { name: string; email: string; image?: string };

type TProps = {
  user?: TUser | null;
  setUser(data: TUser): void;
};

export const userContext = createContext({} as TProps);

export function UserProvider({ children }: any) {
  const [user, setUser] = useState<TUser | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
