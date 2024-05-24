'use client';
import { useContext } from "react";
import { LoginPage, CardsPage } from "../";
import { AuthContext } from "@/auth/context";


export const HomePage = () => {
    const { logged } = useContext(AuthContext);

    return (
    <>
      {
        (!logged) 
            ? <LoginPage /> 
            : <CardsPage />
      }
    </>
  )
}
