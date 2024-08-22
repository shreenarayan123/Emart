import React from 'react';
import { useState } from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { useNavigate, useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import { addToWish } from '../../redux/wishReducer';
import {useAuthContext} from "../../context/AuthContext";
import useFetch from '../../components/hooks/useFetch';
import { ThreeDots } from 'react-loader-spinner';
import './Product.scss' 



const Product = () => {
   const sizes =[
    'S','M', 'L' ,'XL','XXL'
  ]
  const navigate = useNavigate();
  const {user} = useAuthContext()
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img1");
  const [size, setSize] = useState(sizes[0]);
   
  const addToBag=()=>{
    user ?(
      dispatch(
        addToCart({
          length: data.length,
          id: data.id,
          title: data.attributes.Title,
          price: data.attributes.Price,
          oldprice : data.attributes.Oldprice,
          off : data.attributes.Off,
          seller: data.attributes.Seller,
          img: data.attributes.img1.data.attributes.url,
          
        })
     )
    ):(
      navigate("/signin", { replace: true })
     )
  }

  const addToList=()=>{
    user ?(
      dispatch(
        addToWish({
          length: data.length,
          id: data.id,
          title: data.attributes.Title,
          price: data.attributes.Price,
          oldprice : data.attributes.Oldprice,
          off : data.attributes.Off,
          seller: data.attributes.Seller,
          img: data.attributes.img1.data.attributes.url
        })
      ) 
    ):(
      navigate("/signin", { replace: true })
     )
  }
 

  const dispatch = useDispatch();
  const { data, loading } = useFetch(`/products/${id}?populate=*`);
  

  

  return (
    <div className='product-page'>
      { loading ? 
      <ThreeDots
      visible={true}
      height="100"
      width="100"
      color="#1057e6"
      radius="9"
      ariaLabel="three-dots-loading"
        
      wrapperStyle={{ position: "absolute", top: "105%", left: "60%", transform: "translate(-50%, -50%)", display: "flex", justifyContent: "center", alignItems: "center" }}
      wrapperClass=""
      />
       : (<>
      <div className="image-sec">
      <div className="other-views">
      <img src={ data?.attributes?.img1?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img1")} />
      <img src={data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")} />
      <img src={data?.attributes?.img3?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img3")} />
      <img src={ data?.attributes?.img4?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img4")} />
      <img src={ data?.attributes?.img5?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img5")} />
        

      </div>
      <div className="main-image">
      <img src={ data?.attributes[selectedImg]?.data?.attributes?.url } alt="" />
      </div>
      </div>
      <div className="p-details">
        <div className="name">
          <h2>{data?.attributes.Title}</h2>
          <span className='rating'><h3>{data?.attributes.Star}</h3> <span  className='stars'> 
          <StarRoundedIcon style={{color:"skyblue", fontSize:'2rem'}}/>
          <StarRoundedIcon style={{color:"skyblue" , fontSize:'2rem'}}/>
          <StarRoundedIcon style={{color:"skyblue" , fontSize:'2rem'}}/>
          <StarRoundedIcon style={{color:"skyblue" , fontSize:'2rem'}}/>
          <StarOutlineRoundedIcon  style={{color:"skyblue" , fontSize:'2rem'}}/>
           </span></span>
        </div>
        <div className="p-price">
          <span className='pricing'> <h2 style={{fontWeight:"550"}}>₹{data?.attributes?.Price}</h2>
            <span className='pricing' > <h3>MRP</h3><h3 style={{textDecoration:"line-through" }}>₹{data?.attributes.Oldprice}</h3></span>
            <h2 style={{color:"orange"}}> ({data?.attributes.Off}% OFF)</h2></span>
          <h4>inclusive of all taxes</h4>
          <div className="sizes">
            <h1>SELECT SIZE</h1>
            
            <span className='sz'>
              {sizes.map((curSize, index)=>{
                return(
                  <div  key={index} className={size === curSize ? "selected" : "size"} onClick={()=>{
                   setSize(curSize)
                   
                  }}>
                    {curSize}

                  </div>
                )
              })}
             
             
            </span>
            <span className='action'>
              
              <button className='addcart' onClick={addToBag}>
                 <LocalMallOutlinedIcon style={{color:'white'}} /> ADD TO BAG</button>
              <button className='whishlist'onClick={addToList} > <FavoriteBorderIcon style={{color:'black'}}/> WISHLIST</button>
              
            </span>
          </div>
        </div>

        <div className="seller">
          <span><h2>Seller :</h2>
           <h1>{data?.attributes.Seller}</h1>
           
          </span>
        </div>

      </div>
      </>)}
    </div>
  )
}

export default  Product 