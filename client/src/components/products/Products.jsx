import React from 'react'
import './Products.scss'
import Card from '../Card/Card'
import useFetch from '../hooks/useFetch';
import { ThreeDots } from 'react-loader-spinner';

const Products = ({catId , subCats}) => {
  
  const {data, loading} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    (item) => `&[filters][subcategories][id][$eq]=${item}`)}`);  
console.log(subCats);
  return (
    <div className='list'>
     

      {
        loading ?
         <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#1057e6"
        radius="9"
        ariaLabel="three-dots-loading"
          
        wrapperStyle={{ position: "absolute", top: "105%", left: "60%", transform: "translate(-50%, -50%)", display: "flex", justifyContent: "center", alignItems: "center" }}
        wrapperClass=""
        /> :
        data?.map( item=> <Card item = {item} key={item.id}/>)
      }
       
    </div>
    
  );
};

export default Products