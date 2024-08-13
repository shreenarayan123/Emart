import React from 'react'
import './Kids.scss'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'
import Products from '../../components/products/Products'


const Kids = () => {

  const catId = parseInt(useParams().id);


  const [selectedSubCats, setSelectedSubCats] = useState( [] );
  
  
  
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
  
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  return (
    <div><div className='kids'>
    <div className="left">
      <div className="link">
        <Link to="/" style={{textDecoration:"none"}}> Home/</Link>
        <Link to="/kids/3" style={{textDecoration:"none"}}>Kids</Link>
      </div>
      <div className="filters">
        <h1>filters</h1>
        <div className="filter">
          <h2>Categories</h2>
          <div className="category">
            <input type="checkbox" id='c1' value={12} onChange={handleChange}/>
            <label htmlFor="c1">Shirts</label>
          </div>
          <div className="category">
            <input type="checkbox" id='c2' value={8} onChange={handleChange}/>
            <label htmlFor="c2">Tops</label>
          </div>
          <div className="category">
            <input type="checkbox" id='c3' value={3} onChange={handleChange}/>
            <label htmlFor="c3">Dresses</label>
          </div>
          <div className="category">
            <input type="checkbox" id='c4' value={2} onChange={handleChange}/>
            <label htmlFor="c4">T-Shirts</label>
          </div>
          <div className="category">
            <input type="checkbox" id='c5' value={16} onChange={handleChange}/>
            <label htmlFor="c5">Shorts</label>
          </div>
         
        </div>
        <div className="filter">
          <h2>price</h2>
          <div className="category">
            <input type="checkbox" id='p1' value={21} onChange={handleChange}/>
            <label htmlFor="p1">Rs. 349 to Rs. 6492</label>
          </div>
          <div className="category">
            <input type="checkbox" id='p2' value={22} onChange={handleChange}/>
            <label htmlFor="p2">Rs. 6492 to Rs. 12635</label>
          </div>
          <div className="category">
            <input type="checkbox" id='p3' value={23} onChange={handleChange}/>
            <label htmlFor="p3">Rs. 12635 to Rs. 18778</label>
          </div>
          <div className="category">
            <input type="checkbox" id='p4' value={24} onChange={handleChange}/>
            <label htmlFor="p4">Rs. 18778 to Rs. 24921</label>
          </div>
        </div>
        <div className="filter">
          <h2>color</h2>
          <div className="category">
            <input type="checkbox" id='c1' value={25} onChange={handleChange}/>
            <label htmlFor="c1"><div style={{background:"red"}}> </div>Red </label>
          </div>
          <div className="category">
            <input type="checkbox" id='c2' value={26} onChange={handleChange}/>
            <label htmlFor="c2"><div style={{background:"blue"}}></div>Blue</label>
          </div>
          <div className="category">
            <input type="checkbox" id='c3' value={27} onChange={handleChange}/>
            <label htmlFor="c3"><div style={{background:"black"}}></div>Black</label>
          </div>
          <div className="category">
            <input type="checkbox" id='c4' value={28} onChange={handleChange}/>
            <label htmlFor="c4"><div style={{background:"yellow"}}></div>Yellow</label>
          </div>
          <div className="category">
            <input type="checkbox" id='c5' value={29} onChange={handleChange}/>
            <label htmlFor="c5"><div style={{background:"maroon"}}></div> Maroon</label>
          </div>
          <div className="category">
            <input type="checkbox" id='c6' value={30} onChange={handleChange}/>
            <label htmlFor="c6"><div style={{background:"white" , border:" solid 1px black"}}></div> White</label>
          </div>
        </div>
        <div className="filter">
          <h2>discount range</h2>
          <div className="category">
            <input type="radio" id='d1' value={31} name='price' onChange={handleChange}/>
            <label htmlFor="d1">10% and above</label>
          </div>
          <div className="category">
            <input type="radio" id='d2' value={32} name='price' onChange={handleChange}/>
            <label htmlFor="d2">20% and above</label>
          </div>
          <div className="category">
            <input type="radio" id='d3' value={33} name='price' onChange={handleChange}/>
            <label htmlFor="d3">30% and above</label>
          </div>
          <div className="category">
            <input type="radio" id='d4' value={34} name='price' onChange={handleChange}/>
            <label htmlFor="d4">40% and above</label>
          </div>
          <div className="category">
            <input type="radio" id='d5' value={35} name='price' onChange={handleChange}/>
            <label htmlFor="d5">50% and above</label>
          </div>
          
        </div>
      </div>
    </div>
    <div className="kids-body">
      <div className="top">
        <img src="https://stylehub.shoppersstop.com/wp-content/uploads/2021/08/kidsBuyingGuide.jpg" alt="" />
      </div>
      <div className="products">
        <Products catId={catId} subCats={selectedSubCats}/>
      </div>
    </div>
  </div>
</div>
  )
}

export default Kids