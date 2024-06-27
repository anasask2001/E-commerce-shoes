import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const nav = useNavigate()

  const [registerData, setRegisterData] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    try { 
    const response = await axios.post("http://localhost:3020/api/users/register", {
      UserName: registerData.UserName,
      Email: registerData.Email,
      Password: registerData.Password,
      ConfirmPassword: registerData.ConfirmPassword
    });
   
   toast.success(response.data.message)
   nav("/login")


  

    } catch (error) {
  
      toast.error(error.response.data.message)
   
      
    }
  };

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
         
        <form onSubmit={handleClick}>
          <input
          required
            style={{

              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
              marginBottom: "5px",
              width: "40vh",
            }}
            type="text"
            placeholder="UserName"
            onChange={(e) => setRegisterData({ ...registerData, UserName: e.target.value })}
          />

          <br />

          <input
           
          required

            style={{
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
              marginBottom: "5px",
              width: "40vh",
            }}
            type="email"
            placeholder="Email"
            onChange={(e) => setRegisterData({ ...registerData, Email: e.target.value })}
          />

          <br />

          <input
          required
            placeholder="Password"
            style={{
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
              marginBottom: "5px",
              width: "40vh",
            }}
            type="password"
            onChange={(e) => setRegisterData({ ...registerData, Password: e.target.value })}
          />

          <br />

          <input
          required
            placeholder="Confirm Password"
            style={{
              borderRadius: "5px",
              border: "none",
              paddingLeft: "5px",
              marginBottom: "5px",
              width: "40vh",
            }}
            type="password"
            onChange={(e) => setRegisterData({ ...registerData, ConfirmPassword: e.target.value })}
          />

          <div
            className="container"
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MDBBtn type="submit" className="text-light" color="black">
              Signup
            </MDBBtn>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Register;
