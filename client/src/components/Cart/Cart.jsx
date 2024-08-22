import React from 'react'
import './Cart.scss'
import { useState } from 'react'
import {  useSelector } from 'react-redux';
import {  useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import { addToWish } from '../../redux/wishReducer';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import {loadStripe} from '@stripe/stripe-js';
import {makeRequest} from '../../makeRequest';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';




const Cart = () => {

  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  
  

  const dispatch = useDispatch();
  
 
  const [quantity, setQuantity] = useState(1);
  const products = useSelector(state=>state.cart.products);
  const totalPrice = ()=>{
    let total = 0;
    products.forEach((item) => (total += quantity *  item.price ));
      return total
  };
  const totalQuantity = ()=>{
    let total = 0;
    total = products.length;
      return total
  };

  const notify = () => {
      
  
    toast.success("Your payment was successful !", {
      position: toast.POSITION.TOP_CENTER
    });

   
  };
const errornoti = () => {
   

    toast.error("Payment for this order has failed", {
      position: toast.POSITION.TOP_CENTER
    });

   
  };
  
  const navigate = useNavigate();
  const {user} = useAuthContext()
  const stripePromise = loadStripe(
    "pk_test_51NPLloSJXyqCRIM1nBBKYiKghfwMY6Vf9YGEZ4JprwYQEi4iVo2C0mQ2rN08b3Sf5yu6l2IAlUOs7mJP4qRsk5Em007kHRlqgM"
  );
  const handlePayment = async () => {
    
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
          products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
     notify();
    } catch (error) {
     errornoti();
    }

    
    
  };
  const payMent = async ()=>{
    user ?(
      handlePayment()
    ):(
      navigate("/signin", { replace: true })
    )
  }
  return (
    <div className='cart'>
      <ToastContainer/>
      <h1 className='heading'>shopping bag</h1>
      <div className="items">
        <div className="count">

          <div className='number'><h2>ITEMS : </h2>
            <h2>{totalQuantity()}</h2></div>
          <div className='number'><h2>TOTAL : </h2>
            <h2>Rs.{totalPrice()}</h2></div>
        </div>
      <div className="plist">
        {products?.map(item => (
          <div className="item" key={item.id}>
            <div className="top">

              <img src={ item.img} alt="" />
              <div className="details">
                <div className='i-title'>
                  <h3>{item.title}</h3>
                  <h5>(Sold By : {item.seller} )</h5>
                </div>

                <div className="i">
                  <div className='price'>
                    <div className='i-pricing' > <h4> Rs.{item.price}</h4> <div className="mrp"><h5>MRP</h5>  <h5 style={{ textDecoration: "line-through", color: 'gray' }}>Rs.{item.oldprice}</h5></div></div>
                    <div className='size'><h4 className='off' style={{ color: "orange" }}> ({item.off}% OFF)</h4> <FormControl style={{ m: 1, minWidth: 70 }} size='small'>
                              <InputLabel id="demo-select-small-label" style={{color:"blue"}}>Size</InputLabel>
                              <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={size}
                                label="Size"
                                onChange={handleChange}
                              >
       
                                <MenuItem value={10}>S</MenuItem>
                                <MenuItem value={20}>L</MenuItem>
                                <MenuItem value={30}>M</MenuItem>
                                <MenuItem value={30}>XL</MenuItem>
                                <MenuItem value={30}>XXL</MenuItem>
                              </Select>
                            </FormControl></div>
                    
                  </div>
                  <h6 className='taxes' style={{ color: 'green' }}>inclusive of all taxes</h6>

                </div>
                <div className="quantity">
                  <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))} > - </button>
                  {quantity}
                  <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>

                </div>

              </div>
            </div>
            <div className="action">
              <button className='remove' style={{ color: 'navy' }} onClick={()=>dispatch(removeItem(item.id))}>remove</button>
              <button className='movetowish' style={{ color: 'blue' }} onClick={() =>
                dispatch(
                  addToWish({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    oldprice : item.oldprice,
                    off : item.off,
                    seller: item.seller,
                    img:item.img
                  })
                )
              }>move to wishlist</button>
            </div>
          </div>

        ))}
        </div>

        
      </div>
      <div className="place-order">
          <div className="grand-total"><h2>Rs.{totalPrice()}</h2></div>
          <div className="place-it" onClick={payMent}><button >place order</button></div>
        </div>
    </div>
  )
}

export default Cart