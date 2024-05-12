import React, { useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Data } from "../App";
const Updateitem = () => {
  const { id } = useParams();
  const { Products, setProducts } = useContext(Data);
  const itemfound = Products.find((x) => x.id == Number(id));
  const nameRef = useRef("");
  const imgUrlRef = useRef("");
  const priceRef = useRef("");

  
  const navigate = useNavigate();

  const updateitem = () => {
    const temprryproduct = Products.map((x) =>
      x.id == Number(id)
        ? {
            ...x,
            name: nameRef.current.value,
            price: priceRef.current.value,
            imgUrl: imgUrlRef.current.value,
          }
        : x
    );
    setProducts(temprryproduct);
    navigate("/adminproduct");
  };
  const deleteitem=()=>{
    const indexofitem = Products.indexOf(itemfound);
    const temp = Products
    temp.splice(indexofitem,1);
    setProducts(temp);
    navigate("/adminproduct");

  }

  const handleclear = ()=>{
    const clear= nameRef.current.value=('')
            priceRef.current.value=('')
       imgUrlRef.current.value=('')
  }

  return (
    <div>
            <img src={itemfound.imgUrl} />
      <div style={{display:'flex'}}>
      <h1>#{itemfound.id}</h1>
       <input   type="text" ref={nameRef} defaultValue={itemfound.name} />
      <br/>
      <input type="text" ref={imgUrlRef} defaultValue={itemfound.imgUrl} />
      <br/>
      <input type="text" ref={priceRef} defaultValue={itemfound.price} />
 
      </div>
      <div  style={{display:'flex'}}>
      <button onClick={updateitem}>Update</button>
      <button onClick={handleclear}>Clear</button>
      <button onClick={deleteitem}>delete</button>
      </div>


    </div>
  );
};

export default Updateitem;
