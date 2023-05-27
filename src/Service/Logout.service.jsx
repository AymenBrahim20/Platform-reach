/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
import http from "./AxiosContext";



const getLogout=(data)=>{
    return http.get("/auth/logout",data )
}

export default { 
   getLogout
}
