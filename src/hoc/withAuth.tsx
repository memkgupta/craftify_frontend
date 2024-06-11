import { AuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const withAuth = (WrappedComponent:any)=>{
    return (props:any)=>{
        
        let authContext = useContext(AuthContext);
        const router = useRouter();
        useEffect(()=>{

        },[authContext]);

        if(authContext&&authContext.loading){
            return <div>Loading...</div>
        }
        return authContext&&authContext.loading?<WrappedComponent {...props}/>:null;
    }
}