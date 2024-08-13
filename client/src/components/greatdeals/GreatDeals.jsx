import React from 'react'
import './GreatDeals.scss';
import { Link } from 'react-router-dom';



const GreatDeals = ({ type }) => {

  

  return (
    <div className='great-deals'>
      <div className="section">
        <div className="top">
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/V1/1-pc.gif" alt="" /></span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_03.jpg" alt="" /></span>
        </div>
        <div className="bottom">
          <div className="category">
            <Link  className="item" to='/women/2'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_04.jpg" alt="" /></Link >
            <Link  className="item" to='/women/2'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_05.jpg" alt="" /></Link >
          </div>
          <div className="category">
            <Link  className="item" to='/accessories/4'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_08.jpg" alt="" /></Link >
            <Link  className="item" to='/women/2'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_07.jpg" alt="" /></Link >
          </div>
          <div className="deals">
            <Link  className="deal" to='/accessories/4'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/Eyewear/Womens_eyewear_PC.png" alt="" /></Link >
           
          </div>
        
      </div>
      <div className="section">
        <div className="top">
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_10.jpg" alt="" /></span>
          
        </div>
        <div className="bottom">
          <div className="category">
            <Link  className="item" to='/men/1'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_11.jpg" alt="" /></Link >
            <Link  className="item" to='/men/1'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_12.jpg" alt="" /></Link >
          </div>
          <div className="category">
            <Link  className="item" to='/men/1'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_13.jpg" alt="" /></Link >
            <Link  className="item" to='/men/1'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_14.jpg" alt="" /></Link >
          </div>
          <div className="deals">
          <Link  className="deal" to='accessories/4'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/Eyewear/Mens_eyewear_PC.png" alt="" /></Link >
           
          </div>
         
        </div>
      </div>
      <div className="section">
        <div className="top">
         <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/V1/V2/PC_updated.gif" alt="" /></span>
          
        </div>
        <div className="bottom">
        <div className="category">
            <Link  className="item" to='/kids/3'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC_18.jpg" alt="" /></Link >
            <Link  className="item" to='/kids/3'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC_19.jpg" alt="" /></Link >
          </div>
          
          <div className="deals">
            <Link  className="deal" to='/kids/3'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_27.gif" alt="" /></Link >
           
          </div>
        </div>
      </div>
      <div className="section">
        <div className="top">
         <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_43.jpg" alt="" /></span>
         
        </div>
        <div className="bottom">
          <div className="category">
            <Link className="item" to='/men/1'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_26.jpg" alt="" /></Link>
            <Link className="item" to='/women/2'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/desktop-open_25.jpg" alt="" /></Link>
          </div>
          <div className="category">
            <Link className='item' to="/accessories/4"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/V1/V2/PC_29.gif" alt="" /></Link>
            <Link className="item" to='/accessories/4'><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/V1/V2/PC_27.gif" alt="" /></Link >
          </div>
          
          <div className="offers" style={{padding:"20px 0", width:"98vw"}}>
          <Link  className="deal" to='men/1' ><img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/N2GLoffer/welcomepc-V1._CB587586825_.gif" alt="" /></Link >
           
          </div>
          
         
        </div>
      </div>
      </div>
      

    </div>
  )
}

export default GreatDeals 