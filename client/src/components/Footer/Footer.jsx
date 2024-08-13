import React from 'react'
import './Footer.scss';
import { Link } from 'react-router-dom';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import VerifiedIcon from '@mui/icons-material/Verified';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="features">
        <div className="feature">
        <div className='icon'><PublishedWithChangesIcon style={{fontSize:'3.7rem'}}/></div>
          <span>EASY EXCHANGE</span>
        </div>
        <div className="feature">
        <div className='icon'><VolunteerActivismRoundedIcon style={{fontSize:'3.7rem'}}/></div>
          <span>100% HANDPICKED</span>
        </div>        <div className="feature">
        <div className='icon'><  VerifiedIcon style={{fontSize:'3.7rem'}}/></div>
          <span>ASSURED QUALITY</span>
        </div>
 
      </div>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
         <Link className="link" to="/men/1">Men</Link> 
         <Link className="link" to="/women/2">Women</Link> 
         <Link className="link" to="/kids/3">Kids</Link> 
         <Link className="link" to="/accessories/4">Accessories</Link> 
         <Link className="link" to="/men/1">New Arrivals</Link> 
        </div>
        <div className="item">
          <h1>Useful Links</h1>
          <span>FAQ</span>
          <span>T&C</span>
          <span>Privacy Policy</span>
        </div>
        <div className="item ">
          <h1>About</h1>
          <span>E-mart is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at E-mart from the comfort of your home and get your favourites delivered right to your doorstep.</span>
        </div>
        <div className="item ">
          <h1>Contact us</h1>
          <div className="contact">
            <RoomOutlinedIcon/>
            <span>Buildings Alyssa,Begonia and Clover situated in Embassy Tech Village,Outer Ring Road,Devarabeesanahalli Village,Varthur Hobli,Bengaluru – 560103, India</span>
          </div>
          <div className="contact">
            <PhoneAndroidOutlinedIcon/>
            <span>Phone:91+ 3546682968</span>
          </div>
          <div className="contact">
            <EmailOutlinedIcon/>
            <span>Email:contact@eshop.com</span>
          </div>
          
        </div>
        <div className="item">
          
            <h1>Keep In Touch</h1>
            <div className="kintouch">
          <InstagramIcon   style={{color:'rgb(220, 224, 227)' , fontSize:'2.5rem'} }/>
          <FacebookIcon   style={{color:'rgb(220, 224, 227)' , fontSize:'2.5rem'} }/>
          <TwitterIcon   style={{color:'rgb(220, 224, 227)' , fontSize:'2.5rem'} }/>
          <YouTubeIcon   style={{color:'rgb(220, 224, 227)' , fontSize:'2.5rem'} }/>
          </div>

        </div>
      </div>
      <div className="bottom">
        <div className="copy">
        <img src="\img\emart-logo(2).png" alt=""  height={40} width={200}/>
          <span className='copyright'>© 2023 www.Emart.com. All rights reserved.</span>
          
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="logo" />
        </div>
      </div>
     
    </div>
  )
}

export default Footer