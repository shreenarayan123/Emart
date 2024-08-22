import React from 'react'
import './Card.scss';
import {Link} from "react-router-dom"



const Card = ({item}) => {
  
  return (
    <Link className='link' to={`/product/${item.id}`}>
      
    <div className="card">
      <div className="image">
      <img src={item.attributes?.img1?.data?.attributes?.url } alt="featured" />
      </div>
      <div className="details">
       <h2 >{item?.attributes.Title}</h2>
      <div className="p-det">
        <div className="prices">
        <h3 >₹{item?.attributes.Price}</h3>
        <h3 >₹{item?.attributes.Oldprice}</h3>
        </div>
        <h3  >({item?.attributes.Off}%Off)</h3>

      </div>
      </div>
      </div>
      </Link>
  )
  
}
export default Card