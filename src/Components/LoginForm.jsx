import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {login,updateemail} from '../redux/user'
 
const Wrapper = styled.div`
padding:50px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;


const Input = styled.input`
border-radius:10px;
padding-left:10px;
height:30px;
width:150%;
border:0px;
margin:10px;
`;
const LoginButton = styled.button`
border-radius:10px;
padding-right:75px;
padding-left:75px;
width:150%;
height:30px;
margin:20px;
border:0px;
font-weight:600;
color:teal;
`;

function LoginForm(props) {
    const [tname,setTname]=useState("");
    const [temail,setTemail]=useState("")
    const user =useSelector((state)=>state.user.value);
    const dispatch = useDispatch()
    const handleChange =(e)=>{
         setTname(e.target.value)
        // dispatch((login({name:tname})))
    }
    const handlemChange =(e)=>{
        setTemail(e.target.value)
    }
    const handleClick = ()=>{
        // console.log(tname)
        dispatch((login({name:tname,age:26,email:"akhil@gmail.com"})))
    }
    const handlemClick=()=>{
        dispatch((updateemail({email:temail})))
    }
      return (
    <Wrapper>
            <Input  onChange={(e)=>handleChange(e)} placeholder="Name" type="text" />
            <Input onChange={(e)=>handlemChange(e) } placeholder="Email" type="text" />
            <LoginButton onClick={handleClick}>LOGIN</LoginButton>
            <LoginButton onClick={handlemClick}>UPDATE MAIL</LoginButton>
       
    </Wrapper>
    
  )
}

export default LoginForm