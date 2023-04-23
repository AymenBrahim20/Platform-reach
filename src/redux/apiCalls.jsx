import { loginFailure,loginStart, loginSuccess } from "./UserReducer";
import LoginService from "../Service/Login.service";

export const login= async(dispatch,user)=>{
    dispatch(loginStart());
    try{
           const res= await LoginService.LoginAuth(user)
           dispatch(loginSuccess(res.data))

    }
    catch(err){
  dispatch(loginFailure())    
  
    }
}