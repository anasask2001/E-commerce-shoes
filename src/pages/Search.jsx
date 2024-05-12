import React, { useContext, useState } from 'react';
import { Data } from '../App';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

function Search() {
  const { search,wishlist,setWishlist } = useContext(Data);
  const navigate = useNavigate();



  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {

      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
   
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div>
      {search.length == 0 ?<h1>No item found</h1> : <>
      {search.map((x) => (
        <MDBCard style={{ display: 'flex', flexDirection: 'row', margin: '20px', height: '20%' }} key={x.id}>
   
          <MDBCardImage style={{ position: 'relative', width: '20%', padding: '25px',objectFit:'contain'}} src={x.imgUrl}  position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{x.name}</MDBCardTitle>
            <p>{'₹' + x.price}</p>
            <MDBCardText>A shoe is an item of footwear intended to protect and comfort the human foot.</MDBCardText>
       
  <MDBBtn color='black'onClick={() => navigate(`/${x.id}`)}>
    Show
  </MDBBtn>




            
                   <FaHeart
            style={{ color: wishlist.includes(x.id) ? 'red' : 'grey', cursor: 'pointer', marginLeft:'90%'}}
            onClick={() => toggleWishlist(x.id)}
          ></FaHeart>
          </MDBCardBody>
        </MDBCard>
      ))}</>}
    </div>
  );
}

export default Search;
