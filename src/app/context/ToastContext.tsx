import Alert from '@/components/alerts/Alert';
import React, { ReactNode, createContext, useContext, useState } from 'react';
interface ToastContextData {
    showToast: (message: string,type:string) => void;
  }

 export const ToastContext = createContext<ToastContextData|undefined>(undefined);
export const ToastProvider = ({children}:{children:ReactNode})=>{
    const [toastMessage, setToastMessage] = useState<string>('');
    const [type,setType] = useState("default")
    const showToast = (message: string,type:string) => {
        console.log("hello")
      setToastMessage(message);
      setType(type)
      setTimeout(() => {
        setToastMessage('');
        setType('default');
      }, 5000); // Close toast automatically after 5 seconds
    };

return(
    
    <ToastContext.Provider value={{ showToast }}>
       {children}
      {toastMessage && <Alert message={toastMessage} type={type}/>}
     
    </ToastContext.Provider>
)
} 
