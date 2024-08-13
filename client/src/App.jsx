import { BrowserRouter, Outlet } from "react-router-dom";
import {  ToastContainer } from 'react-toastify';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./Routes";
import "./App.scss";







function App(){

return (
  <BrowserRouter>
  
  <div className="app">

       <Navbar/>
      <ToastContainer/>
        <AppRoutes/>
        
       <Outlet/>
       <Footer/>
 
 </div>  
 
 </BrowserRouter>
)
}

export default App