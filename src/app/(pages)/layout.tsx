import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import Navbar from "@/components/nav/Navbar";

export default function PageLayout({
  children
}: {
  children: React.ReactNode;
}) 

{
    return(
  <>
  <Navbar/>
    {children}

  </>
    )
  
}
