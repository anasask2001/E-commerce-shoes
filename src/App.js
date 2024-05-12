import React, { createContext, useState } from "react";
import Nav from "./components/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./User/Login";
import Registration from "./User/Registration";
import Home from "./components/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Collection from "./pages/Collection";
import Lookbook from "./pages/Lookbook";
import Sale from "./pages/Sale";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Ourstory from "./pages/Ourstory";
import Cart from "./pages/Cart";
import items from "./components/Products";
import Singleitem from "./pages/Singleitem";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import {
  validateEmail,
  validatePassword,
  validateCon_pass,
} from "../src/components/Validate";
import Profile from "./pages/Profile";
import { Adminhome } from "./Admin/Adminhome";
import Adminproduct from "./Admin/Adminproduct";
import { Userscheck } from "./Admin/Userscheck";
import "./App.css";
import { Toaster, toast } from "react-hot-toast";
import Updateitem from "./Admin/Updateitem";
import AddProduct from "./Admin/AddProduct";
import { Logout } from "./Admin/Logout";
import { Usersingle } from "./Admin/Usersingle";

export const Data = createContext();
function App() {
  const [isuser, setisuser] = useState(null);
  const [Products, setProducts] = useState(items);
  const [isloged, setisloged] = useState(false);
  const [cart, setcart] = useState([]);
  const [search, setsearch] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [order, setorder] = useState();

  const [users, setusers] = useState([
    {
      username: "anas",
      useremail: "anas.p8113@gmail.com",
      userpass: "123123123",
    },
    {
      username: "anas123",
      useremail: "anas123@gmail.com",
      userpass: "123123123",
    },
    {
      username: "admin",
      useremail: "shoezone@gmail.com",
      userpass: "1234567890",
      role: "admin",
    },
  ]);

  const [adminnav, setadminnav] = useState(null);

  const navigate = useNavigate();
  const register = (name, email, pass, confirmpass) => {
    if (
      validateEmail(email) &&
      validatePassword(pass) &&
      validateCon_pass(pass, confirmpass)
    ) {
      const isExist = users.find((x) => x.useremail === email);
      if (!isExist) {
        setusers((prevUsers) => [
          ...prevUsers,
          {
            username: name,
            useremail: email,
            userpass: pass,
          },
        ]);

        toast.success("registration sucess");

        navigate("/login");
      } else {
        toast.success("User already exists.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      }
    } else {
      toast.error("Try Again");
    }
  };

  return (
    <>
      <Data.Provider
        value={{
          Products,
          setProducts,
          cart,
          setcart,
          setsearch,
          search,
          wishlist,
          setWishlist,

          register,
          users,
          isuser,
          setisuser,
          isloged,
          setisloged,

          setusers,
          adminnav,
          setadminnav,
          order,
          setorder,
        }}
      >
        <header className="App-header">
          <Nav />

          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/lookbook" element={<Lookbook />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourstory" element={<Ourstory />} />
            <Route path="/cart" element={<Cart />} /> :
            <Route path="/:id" element={<Singleitem />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/adminhome" element={<Adminhome />} />
            <Route path="/userscheck" element={<Userscheck />} />
            <Route path="/adminproduct" element={<Adminproduct />} />
            <Route path="/updateitem/:id" element={<Updateitem />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/Usersingle/:id" element={<Usersingle />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
          <Footer />
        </header>
      </Data.Provider>
    </>
  );
}

export default App;
