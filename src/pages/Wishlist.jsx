import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useContext } from 'react';
import { Data } from '../App';
import { FaHeart } from "react-icons/fa";

export const Wishlist = () => {
  const { isloged, } = useContext(Data);

  const [wishlist,setwishlist]=useState([])
  const [ refresh,setrefresh]=useState(false)

 useEffect(()=>{
  const fetchwishlistdata = async()=>{
    const response = await axios.get(`http://localhost:3020/api/users/${isloged._id}/wishlist`)
    setwishlist(response.data)
    setrefresh(!refresh)
   
  }
  fetchwishlistdata()
 },[refresh])


 const fetchdelete = async (id)=>{
  try {
    const response  = await axios.delete(`http://localhost:3020/api/users/${isloged._id}/wishlist/${id}/remove`)
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
 }


  return (
<>
    {wishlist.map((x)=>(
    <div>




<MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src={x.ProductId.ProductImage}
            alt=''
            style={{ width: '200px', height: '200px' }}
           
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>{x.ProductId.ProductTitle}</p>
            <p className='text-muted mb-0'>{"₹" +x.ProductId.ProductPrice}</p>
            <FaHeart className="mx-2" style={{color:"black",fontSize:'20px'}} onClick={()=>(fetchdelete(x.ProductId._id))}/>
          </div>
        </div>
      </MDBListGroupItem>
    </MDBListGroup>



    </div>
    ))}
    </>

  )
}


export default Wishlist