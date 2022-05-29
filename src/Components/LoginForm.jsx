import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {login} from '../redux/user'
import {changeColor}  from '../redux/theme'
 
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
width:100%;
border:0px;
margin:10px;
`;
const LoginButton = styled.button`
border-radius:10px;
padding-right:75px;
padding-left:75px;
width:100%;
height:30px;
margin:20px;
border:0px;
font-weight:600;
color:teal;
`;

function LoginForm(props) {
    const [color,setColor]=useState("");
    const user =useSelector((state)=>state.user.value);
    const dispatch = useDispatch()

    const handleChange =(e)=>{
        setColor(e.target.value)
    }
   
    const handleClick = ()=>{
        // console.log(tname)
        dispatch((login({name:"Akhil",age:26,email:"akhil@gmail.com"})))
    }
    const handlemClick = ()=>{
        console.log(color)
        dispatch((changeColor({color:color})))
    }
    // const handlemClick=()=>{
    //     // dispatch((updateemail({email:temail})))
    // }
      return (
    <Wrapper>
            <Input   placeholder="Name" type="text" />
            <LoginButton onClick={handleClick}>LOGIN</LoginButton>
            <Input onChange={(e)=>handleChange(e)} placeholder="Colour" type="text" />
            <LoginButton onClick={handlemClick}>CHANGE BACKGROUND</LoginButton>
       
    </Wrapper>
    
  )
}

export default LoginForm