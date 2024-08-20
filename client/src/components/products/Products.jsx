import React from 'react'
import './Products.scss'
import Card from '../Card/Card'
import useFetch from '../hooks/useFetch';

const Products = ({catId , subCats}) => {
  
  const {data, loading} = useFetch(`https://emart-pzxc.onrender.com/api/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    (item) => `&[filters][subcategories][id][$eq]=${item}`)}`);  
console.log(subCats);
  return (
    <div className='list'>
      {
        loading ? "loading" :
        data?.map( item=> <Card item = {item} key={item.id}/>)
      }
       
    </div>
    
  );
};

export default Products