import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { MdCancel } from "react-icons/md"
import { useState } from "react"

export default function AlertDestructive({message,type}:{message:String,type:String}) {
    const [isShow,setShow] = useState(true);
  return (

   
<>
{isShow &&
    ( 
    <Alert variant={type==="error"?"destructive":"default"} className="absolute right-10 top-10 max-w-72 animate-in">
        <div>
            <MdCancel  color={type==="error"?"red":"green"} className="absolute right-5 top-5 cursor-pointer" onClick={()=>{setShow(!isShow)}}/>
        </div>
        <AlertCircle className="h-4 w-4 " />
        <AlertTitle>{type==="error"?"Some Error Occured":"Message"}</AlertTitle>
        <AlertDescription>
          {message}
        </AlertDescription>
      </Alert>)
   }
</>


  )
}
