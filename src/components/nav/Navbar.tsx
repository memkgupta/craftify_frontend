"use client"

import { AuthContext } from "@/app/context/AuthContext"
import { useContext } from "react"
import Wrapper from "./NavbarWrapper";


export default function Navbar(){
    const context = useContext(AuthContext);
    return(
        <Wrapper>
            <div>
{context && context.isAuthenticated ?"Auth":"Login"}
        </div>
        </Wrapper>
    )
}