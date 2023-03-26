import React from 'react'
import styled from 'styled-components';
import BfButton1 from '../BfButton1';
// import backImg from '../images/coffee1.jpg';
import icon1 from '../images/Vector.svg'
import { AutoPage, Gradient, StarterPage, Text } from './starter.Style';

const text = {
    textBufetura: "მოგესალმებით ბუფეტურაში",
    textAuto:"ავტორიზაცია",
    textReg:"რეგისტრაცია"
}




const Starter = () => {
  return (
    <Wrapper>
        <StarterPage>
         <Gradient>
        <AutoPage>
            <img src={icon1}/>
            <Text className="header">
              {text.textBufetura}
            </Text>
            
            <BfButton1 text={text.textAuto}/>
            <BfButton1 text={text.textReg} margin={"10px 0 0 0"}/>
            
        </AutoPage>
        </Gradient> 
        </StarterPage>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`

export default Starter