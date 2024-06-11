import axios from "axios"
import { useEffect, useState } from "react"
const useApi = (url:string,options={},method:string='GET',body:any=null)=>{
const [data,setData] = useState(null);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);

useEffect(()=>{
    const source =  axios.CancelToken.source();

const fetchData = async()=>{
    setLoading(true);

    try {
        const response = await axios({
            url,method,data:body,...options,cancelToken:source.token
        });
        setData(response.data);
    } catch (error:any) {
        if(axios.isCancel(error)){
console.log("Request canceled",error.message);
        }
        else{
            setError(error);
        }
    }
    finally{
        setLoading(false);
    }
}
fetchData();
return () =>{
    source.cancel("Operation canceled by the user");
}
},[url,options,method,body])
return {data,loading,error};
}

export default useApi;