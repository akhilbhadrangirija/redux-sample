import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './Components/LoginForm';
import { useSelector } from 'react-redux';


const Avatar = styled.div`
padding:10%;
opacity:60%;
font-size:2.5rem;



`;

const Wrapper = styled.div`
background-color:teal;
margin:0;
height:100%;
display:flex;
flex-direction:row;
padding:7%;
justify-content:space-between;

`;
const InputSection = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const Cover = styled.img`
border-radius:5%`;



function App() {
  const color=useSelector((state)=>state.theme.value)
  console.log(color.color)
  const theme =color.color;
  const user = useSelector((state)=>state.user.value)

  return (
    <Wrapper>
      <Cover src="https://img.freepik.com/free-vector/hand-drawn-business-planning_23-2149172241.jpg?t=st=1653803713~exp=1653804313~hmac=e4d9e160824a80ca9fead78c8caf59af48e7e62340bab0819a0f5f1ab3e6a779&w=740" />
      <InputSection>
      <p style={{backgroundColor:theme}}>{theme}  Hi hello</p>
        <Avatar>Hi {user.name}! <br />{user.email}</Avatar>
        <LoginForm name={user.name} email={user.email}/>
      </InputSection>
    </Wrapper>
  );
}

export default App;
