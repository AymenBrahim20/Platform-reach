import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupService from "../Service/Signup.service";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
    text-align:left
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-family: 'Urbanist', 'sans-serif';
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #ca1515;
  color: white;
  cursor: pointer;
  font-weight: 600;

	
`;

function Register () {

  const navigate = useNavigate()
  const [user,setUser]=useState({})


  
const onChangeHandler=(e)=>{
 
  setUser({
    ...user,
    [e.target.name]:e.target.value
  })
  console.log(user)
}

const formData = new FormData();
      const onSubmitHandler=(e)=>{
      e.preventDefault();
      formData.append('username', user.username);
      formData.append('email', user.email);
      formData.append('password', user.password);
      

      SignupService.SignupUser(formData).then((res)=>{
        console.log(res)
        localStorage.setItem("currentUser",JSON.stringify(res.formData))

        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })
      }
         



return(
  <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form  onSubmit={onSubmitHandler}>
         
          <Input placeholder="username" name="username"  onChange={onChangeHandler}/>
          <Input placeholder="email" name="email"  onChange={onChangeHandler} />
          <Input placeholder="password" name="password"  onChange={onChangeHandler} />
          <Input placeholder="confirm password" name="password"  onChange={onChangeHandler} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button  >CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
)
}

export default Register