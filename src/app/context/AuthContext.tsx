import React, { createContext,FC, useEffect, useState } from "react";
import { AuthContextProps,AuthUser } from "../types";
import { useRouter } from "next/navigation";
import axios from "axios";
import { HOST_URL } from "@/constants";

const AuthContext = createContext<AuthContextProps|undefined>(undefined);

const AuthProvider:FC<{children:React.ReactNode}> = ({children})=>{
    const [user,setUser] = useState<AuthUser|null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    useEffect(()=>{
        const loadUser = async()=>{
            const token = localStorage.getItem('token');
            if(token){
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            }
            else{
                delete axios.defaults.headers.common['Authorization']
                
            }

            try {
                const res = await axios.get(`${HOST_URL}/users/auth`);
                setUser(res.data.user);
                setLoading(false);
            } catch (error) {
                setUser(null);
                setLoading(false);
            }
        }

        loadUser();
    },[]);

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['x-auth-token'];
        setUser(null);
        router.push('/login');
    };

    return(
        <AuthContext.Provider value={{user:user!!,loading,isAuthenticated:!!user}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider}