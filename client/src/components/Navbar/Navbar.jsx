
import { useNavigate } from 'react-router-dom';
import {useAuthContext} from "../../context/AuthContext";
import {removeToken} from "../../helpers";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Button from '@mui/material/Button';
import { toast, ToastContainer } from 'react-toastify';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';

import "./Navbar.scss";

const Navbar = () => {

  
  

  const {user} = useAuthContext()
  const navigate = useNavigate();

  const handleLogout = ()=>{
    removeToken();
    
    navigate("/", {replace:true});
    window.location.reload();
  };
  const products =useSelector((state)=> state.cart.products);
  const [open, setOpen] =useState(false);
  const items =useSelector((state)=> state.wish.items);
  const [wish, setWish] =useState(false);
  const notify = () => {
    handleLogout();
    

    toast.info(" you are  logged out !", {
      position: toast.POSITION.TOP_RIGHT
    });

    
   
  };
 
  return (

    <div className='navbar'>
      <div className='wrapper'>
        <div className='nav'>
          
          <div className="item">
            <Link className='link' to="/men/1">MEN</Link>
          </div>
          <div className="item">
            <Link  className='link' to="/women/2">WOMEN</Link>
          </div>
          <div className="item">
            <Link className='link' to="/kids/3">KIDS</Link>
          </div>
          <div className="item">
            <Link className='link' to="/accessories/4">ACCESSORIES</Link>
          </div>
         
        </div>
        <div className="center">
        <div className="item">
        <Link className='link' to="/" >
            <img src="\img\emart-logo(2).png" alt="logo"  height={40} width={200}/>
            </Link>
          </div>
        </div>

        <div className='right'>
        <div className="item">
            <Link className='link' to="/about">ABOUT</Link>
          </div>
           
                {
                 user ?(
                  <>
                  
                   <div className="item ">  <Button variant="contained" className="auth_button_signUp" onClick={notify}  >Logout
                   <ToastContainer/></Button>
                  </div>
                  
                 
                  
                 <div className="icon auth_button_login item"><PersonIcon/>
                  <h3>{user.username}</h3></div>
                 
                
                  </>
                 ):(
               
                  
                  <>
                  <div className="item ">
                  <Link  className='link' to='/signin' >LOGIN</Link>
                  </div>
                  <div className="item ">
                  <Button variant="contained"  href='/signup'>SIGNUP</Button>
                  </div>
                  </>
                 )
                }
              

            
            
           
           <div className="icon"onClick={()=>setWish(!wish)}><FavoriteBorderIcon/><h3>Wishlist</h3></div>
           <span className={`${items.length !== 0 ? "wish" :" none"}`}>{items.length }</span>
            <div className="mycart">
              <div className="icon" onClick={()=>setOpen(!open)}>
              <LocalMallOutlinedIcon/>
             <h3>Bag</h3></div>
             <span className={`${items.length !== 0 ? "cartnum" :" none"}`}>{products.length }</span>
              
            </div>
          
        </div>
        
      </div>
      {open && <Cart/>},{wish && <Wishlist/>}
    </div>
  )
}

export default Navbar;