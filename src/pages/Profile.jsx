import React, { useContext } from "react";
import { Data } from "../App";
import { MDBBtn } from "mdb-react-ui-kit";
import Login from "../User/Login";
import "../pages/profile.css";
import { useNavigate } from "react-router-dom";
import { MDBBadge,  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { TableBody } from "@mui/material";

function Profile() {
  const navigate = useNavigate()
  const { setisuser,isuser, isloged, setisloged ,users, setusers,cart,setcart,setadminnav} = useContext(Data);
  const logout = () => {
    
    const allusers= users.map(x=>x.useremail == isuser.useremail?{...x,cart:cart}:x);

    setusers(allusers);
    setcart([]);
    setisuser(null);
    setisloged(null)
    setisloged(false)
    setadminnav(null)
    navigate("/login");
  };
  return (
    <div>
    
     <th style={{display:'flex',justifyContent:'center',alignItems:'center'}} ><h1>Your Profile</h1></th>
      <MDBTable style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      
     
          
          <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '200px', height: '200px' }}
                className='rounded-circle'
              />
            
              
      
 



<TableBody style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
<tr  >
              
              <h4 className='fw-bold mb-1'>Name:{isloged.UserName}</h4>
              <h5 className='text-muted mb-0'>Email:{isloged.Email}</h5>
             
      </tr>

</TableBody>

<TableBody>

      </TableBody>

    </MDBTable>
    <button onClick={logout} class="Btn">
        <div class="sign">
          <svg viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>

        <div class="text">Logout</div>
      </button>
    </div>
  );
}

export default Profile;
