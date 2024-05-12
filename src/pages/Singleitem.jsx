import React, { useState } from "react";
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


function Singleitem() {
  const nav=useNavigate()

  const { Products, cart, setcart,isuser } = useContext(Data);
  const { id } = useParams();

  let test = Products.find((x) => x.id == id);
  const [item, setitem] = useState(test);

  const addcart = (item) => {
    const itemfound = cart.find((x) => x.id == item.id);
    if (itemfound) {
      const result = cart.map((x) =>
        x.id == id ? { ...x, qty: x.qty + 1, total: (x.qty + 1) * x.price } : x
      );

      setcart(result);
    } else {
      
      setcart([...cart, { ...item, total: item.price }]);
      nav(isuser?'/cart':"/login")
  
    }


  };

  return (

    <div className="container" style={{ minHeight: "90vh" }}>
  <div className="row">
    <div className="col-12 col-md-6">
      <img src={item.imgUrl} className="img-fluid" alt={item.name} />
    </div>
    <div
      className="col-12 col-md-6 d-flex align-items-center"
      style={{ padding: "20px" }}
    >
      <div>
        <h3>{item.name}</h3>
        <h6>{"₹" + item.price}</h6>
        <p>
          A shoe is an item of footwear intended to protect and comfort the
          human foot.
        </p>
       
        <MDBBtn color="black" onClick={() => addcart(item)}>
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
