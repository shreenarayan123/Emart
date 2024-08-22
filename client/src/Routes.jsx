import React from "react";
import { Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
 import About from "./components/About/About";  
import Product from "./pages/Product/Product";

import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/Signup";

import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Kids from "./pages/Kids/Kids";
import Accessories from "./pages/Accessories/Accessories";

const AppRoutes = () => {
  
    return (
      
      <Routes>
        
          <Route path="/" element={<Home />}  />
          <Route  path="/men/:id" element={<Men/>} />
          <Route  path="/women/:id" element={<Women/>} />
          <Route  path="/kids/:id" element={<Kids/>} />
          <Route  path="/accessories/:id" element={<Accessories/>} />
          <Route  path="/product/:id" element={<Product/>} />
          <Route  path="/signin" element={<SignIn/>} />
          <Route  path="/signup" element={<SignUp/>} />
          <Route path="/about" element={<About/>}/>
          
          </Routes>
       
        
    );
  };
  
  export default AppRoutes;

