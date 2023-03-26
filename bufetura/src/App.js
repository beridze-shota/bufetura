import './App.css';
import Starter from './components/starter/Starter';
import Reg from './components/Login/Reg'
import Auth from './components/auth/Auth';
import AddProduct from './components/addProduct/AddProduct'
import PassForget from './components/Forgetpassword/PassForget'
import Accept from './components/Accept/Accept'
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import HomePage from './components/homePage/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Starter/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/Reg" element={<Reg/>} />
        <Route path="/Auth" element={<Auth/>} />
        <Route path="/addProduct" element={<AddProduct/>} />
        <Route path="/PassForget" element={<PassForget/>} />
        <Route path="/Accept" element={<Accept/>} />
      </Routes>
    </BrowserRouter>
  );
}

// erorr 

export default App;

