import React from 'react'
import { HomePageWrapper, FoodBox } from '../starter/starter.Style'
import './HomePages.css'


const describes = {
    firstName: "შოთა ბერიძე",   
}
const food = ["1 ბურგერი",
              "2 კოკა-კოლა",
              "1 წყალი",
              "2 ფანქეიქი"]

const confirm = {
    confirmText : "დადასტურება"
}

const HomePage = () => {
  return (
    <div>
      <HomePageWrapper>
        <FoodBox>
          <div className="App">
              <h1 className='describe'>{describes.firstName}</h1>
              <ul className="food">
                {food.map((food) => (
                  <li>{food}</li>
                ))}
              </ul>
              <button type="button" class="btn btn-danger">{confirm.confirmText}</button>
          </div>
        </FoodBox>
        <FoodBox>
          <div className="App">
              <h1 className='describe'>{describes.firstName}</h1>
              <ul className="food">
                {food.map((food) => (
                  <li>{food}</li>
                ))}
              </ul>
              <button type="button" class="btn btn-danger">{confirm.confirmText}</button>
          </div>
        </FoodBox>
      </HomePageWrapper>
    </div>
  )
}

export default HomePage
