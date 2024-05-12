import React, { useContext } from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { Data } from "../App";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoAddCircleSharp } from "react-icons/io5";

const Adminproduct = () => {
  const { Products } = useContext(Data);
  const navigate = useNavigate();
  

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {Products.map((x) => (
        <MDBCard
          style={{ width: "250px", marginBottom: "10px", position: "relative" }}
        >
          <MDBCardImage src={x.imgUrl} position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle>{x.name}</MDBCardTitle>
            <p>{"₹" + x.price}</p>
            <MDBCardText>
              A shoe is an item of footwear intended to protect and comfort the
              human foot.
            </MDBCardText>
            <MDBBtn
              color="black"
              style={{ position: "absolute", bottom: "10px" }}
              onClick={() => navigate(`/updateitem/${x.id}`)}
            >
              show
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      ))}

      <Button
      onClick={()=>navigate("/addproduct")}
        style={{
         backgroundColor:'white',
          position: "fixed",
          bottom: 40,
          right: 0,
        }}
      >
        <IoAddCircleSharp style={{color:'black', fontSize:'40px'}}/>
      </Button>
    </div>
  );
};

export default Adminproduct;
