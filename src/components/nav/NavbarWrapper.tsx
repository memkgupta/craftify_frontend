import { AuthProvider } from "@/app/context/AuthContext";
import React from "react";

export default function Wrapper({children}:{children:React.ReactNode}){
    return(
        <AuthProvider>
{children}
        </AuthProvider>
        
    )
}