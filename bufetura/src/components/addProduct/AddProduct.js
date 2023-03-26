import React from 'react'
import './AddProduct.css'
import Logo from '../images/logo.png'
import Redirect from '../images/redirect.png'
import UserProfile from '../images/userProfile.png'
import UploadPhoto from '../images/uploadPhoto.png'

const AddProduct = () => {
  return (
    <div className="add--product">
        <header>
          <div className="navbar">
              <img src={Logo} alt="logo"/>
              <div className="right--navbar">
                <img className="edit--img" src={Redirect} alt="edit information"/>  
                <img  className="edit--img" src={UserProfile} alt="user profile image"/>  
              </div>
          </div>
          <hr />
        </header>
        <main className='main'>
          <form method="post">
              <div className='name--price'>
                <div>
                <label for="name">სახელწოდება</label>
                <input type="text" name="name" id="name" placeholder='სახელწოდება' required/>
                </div>
                <div>
                <label for="price">ფასი</label>
                <input type="text" name="price" id="price" placeholder="ფასი" required/>
                </div>
              </div>
              <label for="description">აღწერა</label>
              <input type="text" name="description" id="description" placeholder="დაამატეთ აღწერა" required/>
              <label for="more--info">დამატებითი ინფორმაცია</label>
              <input type="text" name="more--info" id="more--info" placeholder="დაამატეთ დამატებითი ინფორმაცია" required/>
              <label className="photo--upload" htmlFor='image'>ფოტოს ატვირთვა   <img src={UploadPhoto} /></label>
              <input type="file" accept='image/*' n id="image" name="photo"  className="hidden" required/>
              <button type="submit">დამატება</button>
          </form>
        </main>
    </div>
  )
}

export default AddProduct
