import React, { useContext, useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import icon1 from "../Assets/Iconmome-removebg-preview.png";
import { Data } from "../App";
import Profile from "../pages/Profile";

function Login() {
  const {
    setIsAdmin,
    isadmin,
    users,
    isuser,
    setisuser,
    isloged,
    setisloged,
    setcart,
    setadminnav
  } = useContext(Data);
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();

  const loginuser = () => {
    const admin = users.find(
      (x) => x.useremail == email && x.userpass == pass && x.role == "admin"
    );
    if(admin){
      setadminnav(admin)
      navigate('/adminhome')
      return true;
    }
    const finduser = users.find(
      (x) => x.useremail == email && x.userpass == pass
    );
    if (finduser) {
      setisuser(finduser);
      setisloged(true);
      if (finduser?.cart) {
        setcart(finduser.cart);
      }

      navigate("/");
    } else {
      alert("not found this useraccount");
    }
  };

  return (
    <>
      {isloged ? (
        <Profile />
      ) : (
        <div
          className="d-flex"
          style={{
            height: "90vh",
            alignItems: "center",
         
          }}
        >
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
            <input
              style={{
                borderRadius: "5px",
                border: "none",
                paddingLeft: "5px",
                marginBottom: "5px",
                width: "40vh",
              }}
              type="text"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              style={{
                borderRadius: "5px",
                border: "none",
                paddingLeft: "5px",
                marginBottom: "5px",
                width: "40vh",
              }}
              type="password"
              placeholder="Password"
              onChange={(e) => setpass(e.target.value)}
            />
            <br />

            <MDBBtn className="text-ligth" color="black" onClick={loginuser}>
              login
            </MDBBtn>

            <p style={{ fontSize: "15px", fontFamily: "Satoshi" }}>
              Don't have an account{" "}
              <Link to="/registration">
                <u>Signup?</u>
              </Link>
            </p>
          </Container>
        </div>
      )}
    </>
  );
}

export default Login;
