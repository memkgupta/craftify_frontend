import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import Navbar from "@/components/nav/Navbar";
import { Button } from "@/components/ui/button";

export default function PageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) 

{
    return(
  <>
  <Navbar/>
    {children}
    <Button>Click me</Button>

  </>
    )
  
}
