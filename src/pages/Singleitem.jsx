import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { Data } from "../App";
import { FaCartShopping } from "react-icons/fa6";
import { MdFlashOn } from "react-icons/md";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import { FaHeart } from "react-icons/fa";


function Singleitem() {
  const nav=useNavigate()

  const { Products, cart, setcart,isuser, isloged } = useContext(Data);
  const { id } = useParams();
  const[showitem,setshowitem]=useState('')
  const [isInWishlist, setIsInWishlist] = useState(false);


  // let test = Products.find((x) => x.id == id);
  const Findproductsingle = async(id)=>{

    const response = await axios.get(`http://localhost:3020/api/users/products/${id}`)
    console.log(response);
    setshowitem(response.data.product)
    console.log(showitem);
  }

console.log(showitem);
  useEffect(()=>{
Findproductsingle(id)
  },[])

  const addtowishlist = async (id)=>{
   
  try {
    const response  = await axios.post(`http://localhost:3020/api/users/${isloged._id}/wishlist/${id}`)
    console.log(response.data);
  } catch (error) {
    console.log(error.response);
  }
  }
  
  // const [item, setitem] = useState(test);

  const addcart = async(id) => {
    try {
      const response  = await axios.post(`http://localhost:3020/api/users/${isloged._id}/cart/${id}`)
      alert(response.data)
    } catch (error) {
      
      
    }
 

  };

  return (

    <div className="container" style={{ minHeight: "90vh" }}>
  <div className="row">
    <div className="col-12 col-md-6">
      
      <img  src={showitem?.ProductImage} className="img-fluid" alt={showitem?.ProductTitle} />
    </div>
    <div
      className="col-12 col-md-6 d-flex align-items-center"
      style={{ padding: "20px" }}
    >
      <div>
        <h3>{showitem.ProductTitle}</h3>
        <h6>{"₹" + showitem.ProductPrice}</h6>
        <p>
          {showitem.ProductDescription}
        </p>
      
        <FaHeart className="mx-2" style={{color:"black",fontSize:'30px'}} onClick={()=>(addtowishlist(showitem._id))} />  <MDBBtn color="black" onClick={() => addcart(showitem._id)}>
          <FaCartShopping />
          ADD TO CART
        </MDBBtn>{" "}
         
    


        <NavLink to="/payment">
          <MDBBtn color="black">
            <MdFlashOn />
            BUY NOW
          </MDBBtn>
        </NavLink>
      </div>
    </div>
  </div>
</div>

  );
}

export default Singleitem;
