import styled from "styled-components"
import backImg from "../images/coffee1.jpg"
import App from './../../App';


export const StarterPage = styled.div`
width: 100%;
height: 100vh;
background-image: url(${backImg});
background-size: cover;
background-repeat: repeat;
background-position: center;
position: relative;

`

export const Gradient = styled.div`
width: 100%;
height: 100%;
background: linear-gradient(180.18deg, rgba(21, 22, 23, 0.3) 0.17%, #3D3486 90.29%);
`
export const AutoPage =styled.div`
width: 100%;
height: 100vh;
gap: 19px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const Text = styled.span`
max-width: 585px;
font-weight: 700;
margin-bottom: 50px;
font-size:70px;
text-align: center;
color: #FFFFFF;
`

export const HomePageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

`

export const FoodBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  /* padding: 50px 0; */

  background: #F4EEF4;
border-radius: 48px;
  
`