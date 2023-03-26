import React from 'react'
import styled from 'styled-components'
import Reg from './Login/Reg'
// import from './reg/Reg'
import Auth from './auth/Auth'
import { useNavigate } from 'react-router-dom'

const BfButton1 = (props) => {
const navigate = useNavigate()
  function handleClick(){
  // navigate("Reg")
  if(props.text == "ავტორიზაცია"){
    navigate("Auth")
  }else{
    navigate("Reg")
  }
}
  return (
  <BfButton margin={props.margin} onClick={()=>handleClick()}>{props.text}</BfButton>
  )
}


const BfButton = styled.button`
max-width: 425px;
font-weight: 700;
font-size: 25px;
margin:${(props) => props.margin ?? "0px"};
line-height: 29px;
text-align: center;
color: #FEFEFE;
height: 70px;
width: 100%;
   background: rgba(255, 255, 255, 0.21);
border: 1px solid #FFFFFF;
border-radius: 30px;
`

export default BfButton1