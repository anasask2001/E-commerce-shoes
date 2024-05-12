import React, { useContext, useRef } from 'react'
import { Data } from '../App';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const { Products, setProducts } = useContext(Data);

    const nameRef = useRef("");
    const imgUrlRef = useRef("");
    const priceRef = useRef("");
    const categoryRef = useRef('')
    const navigate = useNavigate();


    
    function addnewItem(){
        const temparr = Products;
        temparr.push({
          id: Products[Products.length-1].id+1,
          name: nameRef.current.value,
          category: categoryRef.current.value,
          imgUrl:imgUrlRef.current.value,
          price: priceRef.current.value,
          qty:1
        })
        setProducts(temparr);
        navigate("/adminproduct")
    }

  const handlecancel = ()=>{
    const clear=
    nameRef.current.value=('')
    imgUrlRef.current.value=('')
    priceRef.current.value=('')
    categoryRef.current.value=('')

    

  }

  return (
    <div>
      <img src={imgUrlRef.current.value&&imgUrlRef.current.value} />
      <input type="text" placeholder='Product Name' ref={nameRef}  />
      <input type="text" placeholder='Product Imageurl' ref={imgUrlRef}  />
      <input type="text" placeholder='Product Price' ref={priceRef}  />
      <input type="text" placeholder='Product category' ref={categoryRef} />
      <button onClick={addnewItem}>Add</button>
      <button onClick={handlecancel}>Clear</button>
    </div>
  )
}

export default AddProduct
