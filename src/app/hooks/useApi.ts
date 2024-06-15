import axios from "axios"
import { useCallback, useEffect, useState } from "react"
const useApi = (url:string,options={},method:string='GET',body:any=null)=>{
const [data,setData] = useState(null);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);
const fetchData = useCallback(async()=>{
    setLoading(true);

    try {
        const response = await axios({
            url,method,data:body,...options,
        });
        setData(response.data);
    } catch (error:any) {
        console.log(error)
       
            setError(error.message);
        
    }
    finally{
        setLoading(false);
    }
},[url,options,method,body])

return {data,loading,error,fetchData};
}

export default useApi;