import React, { useContext, useState } from "react";
import icone from "../Assets/Iconmome-removebg-preview.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { GiHieroglyphLegs } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";
import Search from "../pages/Search";
import { Data } from "../App";
import { MDBSwitch } from "mdb-react-ui-kit";
import "../Admin/Adminhome.css";
import { IoIosLogOut } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoHome } from "react-icons/io5";

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);
  const [takesearch, settakesearch] = useState("");
  const {
    Products,
    setsearch,
    isuser,
    setisuser,
    isloged,
    adminnav,
    setadminnav,
  } = useContext(Data);
  const navigate = useNavigate();

  const searchcontrol = () => {
    if (takesearch != "") {
      const searchdata = Products.filter((x) =>
        x.name.toLowerCase().includes(takesearch.toLowerCase())
      );
      setsearch(searchdata);
      navigate("/search");
    }

  };
  const setdarkmode =()=>{
    document.querySelector('header').setAttribute('data-theme' ,'dark')
  }
  const setligthmode =()=>{
    document.querySelector('header').setAttribute('data-theme' ,'ligth')
  }
  



  const toggletheme=(e)=>{
    if(e.target.checked)setdarkmode();
    else setligthmode();
  }

  return (
    <>

      <div  >
        {!adminnav ? (



          <MDBNavbar   expand="lg">
            <MDBContainer  fluid>
              <MDBNavbarBrand >
                <Link style={{ color: "black" }} to="/">
                  <img  src='https://th.bing.com/th/id/OIP.zKH4xQIcRsdxitKagAA3BgAAAA?rs=1&pid=ImgDetMain' height="30" alt="" loading="lazy" />
                 <span  className="App-header">SHOEZONE</span> 
                </Link>
              </MDBNavbarBrand>
              
              <MDBNavbarToggler 
      
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon     className="App-header" icon='bars' fas />
        </MDBNavbarToggler>

              <MDBCollapse navbar open={openBasic}>
                <MDBNavbarNav
                  className="mr-auto mb-2 mb-lg-0 "
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingTop: "9px",
                  }}
                >
                  <MDBNavbarItem>
                    <MDBNavbarLink
                      aria-current="page"
                      style={{ textDecoration: "none" }}
                    >
                      <NavLink  style={{ color: "black" }} to="/men">
                       <span className="App-header"  > MEN</span>
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink aria-current="page">
                      <NavLink style={{ color: "black" }} to="/women">
                      <span className="App-header"  > WOMEN</span>
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink aria-current="page">
                      <NavLink style={{ color: "black" }} to="/collection">
                      <span className="App-header"  > COLLECTION</span>
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink aria-current="page">
                      <NavLink style={{ color: "black" }} to="/lookbook">
                      <span className="App-header"  >LOOKBOOK</span>
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink aria-current="page">
                      <NavLink style={{ color: "black" }} to="/sale">
                      <span className="App-header"  > SALE</span>
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <NavLink style={{ color: "black" }} to="/ourstory">
                      <span className="App-header"  >OURSTORY</span>
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <NavLink style={{ color: "black" }} to="/contact">
                      <span className="App-header"  >CONTACT</span>
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <div>
                    <MDBInputGroup className="d-flex w-auto mb-3">
                      <input
                        type="Search"
                        className="form-control"
                        placeholder="Search products.."
                        aria-label="Search"
                        onChange={(e) => settakesearch(e.target.value)}
                      />
                      <MDBBtn
                        color="black"
                        onClick={searchcontrol}
                        style={{ boxShadow: "none" }}
                      >
                        Search
                      </MDBBtn>
                    </MDBInputGroup>
                  </div>

                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <MDBSwitch  className="App-header" style={{backgroundColor:'black'}} id="darkmode-toggle" onClick={toggletheme} />
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <NavLink
                        style={{ color: "black" }}
                        to={isuser ? "/cart" : "/login"}
                      >
                        <FaShoppingCart  className="App-header" />
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <NavLink style={{ color: "black" }} to="/login">

                        {!isuser ? (
                          <>
                            <FaUser  className="App-header" />
                         
                          </>
                        ) : (
                          <div >
                   
                   <p><GiHieroglyphLegs />{isuser?.username}</p>
                   
               
                       
                     
                       
                         </div>
                        )}



                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        ) : (
          //==================admin
          <div class="button-container">
            <button class="button">
              <NavLink to={"/adminhome"}>
                <span style={{ color: "black" }}>
                  <IoHome />
                  Home
                </span>
              </NavLink>
            </button>

            <button class="button">
              <NavLink to={"/userscheck"}>
                {" "}
                <span style={{ color: "black" }}>
                  <FaUsers />
                  Users
                </span>
              </NavLink>
            </button>

            <div>
              <button class="button">
                <NavLink to={"/adminproduct"}>
                  {" "}
                  <span style={{ color: "black" }}>
                    <MdOutlineProductionQuantityLimits />
                    Products
                  </span>
                </NavLink>
              </button>
            </div>
            <button class="button">
              <NavLink to={"/Logout"}>
                <span style={{ color: "black" }}>
                  <IoIosLogOut />
                  Logout
                </span>
              </NavLink>
            </button>
          </div>
        )}
      </div>
 
    </>
  );
}
