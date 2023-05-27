/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
import http from "./AxiosContext";



const SignupUser=(data) => { 
    return http.post("/auth/signup",data )
}

export default { 
    SignupUser
}
