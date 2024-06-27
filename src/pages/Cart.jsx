import React, { useContext, useEffect, useState } from "react";
import { Data } from "../App";
import {
  MDBBtn,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { MdFlashOn } from "react-icons/md";
import "../pages/cart.css";
import axios from "axios";

function Cart() {
  
  const { isloged } = useContext(Data);
  const [showcart, setshowcart] = useState([]);
  const [refresh, setRefresh] = useState(false)


  const fetchcartdata = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3020/api/users/${id}/cart`
      );
      console.log("ghj", response.data);
      setshowcart(response.data || []); // Ensure you set the correct path based on your API response structure
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setshowcart([]); // Handle error by setting showcart to an empty array
    }
  };



  const fetchIncrement = async (id) => {
    try {
      console.log(id);
      const response = await axios.patch(
        `http://localhost:3020/api/users/${isloged._id}/cart/${id}/increament`,{},{withCredentials:true}
      );
      alert(response.data.message);
      setRefresh(!refresh)
    } catch (error) {
      alert(error.response.data.message);
    }
  };



  const fetchDecreament = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:3020/api/users/${isloged._id}/cart/${id}/decreament`
      );
      alert(response.data.message);
      setRefresh(!refresh)
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const fetchDelete = async (id) => {
  try {

    const response = await axios.delete(`http://localhost:3020/api/users/${isloged._id}/cart/remove/${id}`)
    alert(response.data.message);
    setRefresh(!refresh)
  } catch (error) {
    alert(error.response.data.message);
  }
  };


  useEffect(() => {
    if (isloged && isloged._id) {
      fetchcartdata(isloged._id);
    }
  }, [isloged, refresh]);

  return (
    
    <div >
      
      {Array.isArray(showcart) && showcart?.length !== 0 ? 
      <>

      {Array.isArray(showcart) &&
        showcart.map((x, index) => (
          <MDBCard
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "20px",
              height: "20%",
            }}
          >
            <MDBCardImage
              style={{ position: "relative", width: "20%", padding: "15px" }}
              src={x.ProductId.ProductImage}
              alt="..."
            />
            <MDBCardBody>
              <button className="bin-button" onClick={()=>fetchDelete(x.ProductId._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 39 7"
                  className="bin-top"
                >
                  <line
                    strokeWidth="4"
                    stroke="white"
                    y2="5"
                    x2="39"
                    y1="5"
                  ></line>
                  <line
                    strokeWidth="3"
                    stroke="white"
                    y2="1.5"
                    x2="26.0357"
                    y1="1.5"
                    x1="12"
                  ></line>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 33 39"
                  className="bin-bottom"
                >
                  <mask fill="white" id="path-1-inside-1_8_19">
                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                  </mask>
                  <path
                    mask="url(#path-1-inside-1_8_19)"
                    fill="white"
                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                  ></path>
                  <path strokeWidth="4" stroke="white" d="M12 6L12 29"></path>
                  <path strokeWidth="4" stroke="white" d="M21 6V29"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 89 80"
                  className="garbage"
                >
                  <path
                    fill="white"
                    d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                  ></path>
                </svg>
              </button>
              <MDBCardTitle>{x.ProductId.ProductTitle}</MDBCardTitle>
              <p>{"₹" + x.ProductId.ProductPrice}</p>
              <MDBCardText>{x.ProductId.ProductDescription}</MDBCardText>
              <button
                style={{ color: "black", background: "white", height: "30px" }}
                onClick={() => fetchIncrement(x.ProductId._id)}
              >
                +
              </button>
              {x.Quantity}

              <button
                style={{ color: "black", background: "white", height: "30px" }}
                onClick={()=>fetchDecreament(x.ProductId._id)}
              >
                -
              </button>
              <br />
              {"₹" +x.Quantity*x.ProductId.ProductPrice}
              <br />
              <NavLink to="/payment">
                <MDBBtn color="black">
                  <MdFlashOn />
                  BUY NOW
                </MDBBtn>
              </NavLink>
            </MDBCardBody>
          </MDBCard>
        ))}
      <div
        style={{
          width: "100%",
          height: "100px",
          position: "fixed",
          bottom: 0,
          backgroundColor: "#F0F0F0",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/* {totalprice !== 0 ? (
          <div>
            <h6>Total: {"₹" + totalprice}</h6>
            <NavLink to="/payment">
              <MDBBtn color="dark">Place Order</MDBBtn>
            </NavLink>
          </div>
        ) : null} */}
      </div>
      </>:<>
      <h4 style={{color:'gray', textAlign:'center',padding:'70px'}}> your cart is empty! Add something now."</h4> 
      </>}
    </div>

  );
}

export default Cart;
