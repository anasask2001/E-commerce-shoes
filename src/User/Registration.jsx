import React, { useState, useContext } from "react";
import { Data } from "../App";
import { MDBBtn } from 'mdb-react-ui-kit';
import { Container } from "react-bootstrap";

const Register = () => {
  const {register } = useContext(Data);


  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')
  const [conpass,setconpass]=useState('')


  return (
    <div className="d-flex" style={{ height: "90vh", alignItems: "center" }}>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          height: "80vh",
          width: "70vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F0F0F0",
          borderRadius: "20px",
        }}
      >
      <form onSubmit={(e)=>{
        e.preventDefault();
        register(name, email, pass, conpass)}}>
  
   
          <input   style={{
            borderRadius: "5px",
            border: "none",
            paddingLeft: "5px",
            marginBottom: "5px",
            width: "40vh",
          }}
            type="text"
            placeholder="Name"
            
  
            onChange={(e)=>setname(e.target.value)}
          />
   
        <br />
       
          <input   style={{
            borderRadius: "5px",
            border: "none",
            paddingLeft: "5px",
            marginBottom: "5px",
            width: "40vh",
          }}
            type="email"
            placeholder="Email"
           
 
            onChange={(e)=>setemail(e.target.value)}
          />
      
        <br />

          <input placeholder="Password"  style={{
            borderRadius: "5px",
            border: "none",
            paddingLeft: "5px",
            marginBottom: "5px",
            width: "40vh",
          }}
            type="password"
           
           
            onChange={(e)=>setpass(e.target.value)}
          />
      
        <br />
    

          <input placeholder="confrm Password"style={{
            borderRadius: "5px",
            border: "none",
            paddingLeft: "5px",
            marginBottom: "5px",
            width: "40vh",
          }}
            type="password" 
           
            onChange={(e) => setconpass(e.target.value)}
          />
      
     
        <div className="container" style={{marginTop:'20px', display:'flex',justifyContent:'center'}}>
        <MDBBtn className="text-ligth" color="black">
         Signup
        </MDBBtn>
        </div>
      </form>
      </Container>
    </div>
  );
};

export default Register;
