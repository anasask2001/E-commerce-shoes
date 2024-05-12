import React, { useContext } from 'react'
import { Data } from '../App';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


function Men() {

  const navigate=useNavigate()
const {Products,setProducts} = useContext(Data)
  return (
<>

    <div   style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between', width:'100%'}}>
    {Products.map((x)=>{if(x.category=='men') { 
      return(
    
    <MDBCard   style={{width:'250px',  marginBottom:'10px' ,position:'relative'}} >
      <div className='bg-image hover-zoom'>
    <MDBCardImage className='w70' src={x.imgUrl} position='top' alt='...' />
    </div>
    <MDBCardBody >
      <MDBCardTitle>{x.name}</MDBCardTitle>
      <p>{'₹'+x.price}</p>
      <MDBCardText>
      A shoe is an item of footwear intended to protect and comfort the human foot. 
      </MDBCardText>
      <MDBBtn color='black' style={{position:'absolute', bottom:'10px'}} onClick={()=>navigate(`/${x.id}`)}>show</MDBBtn>
    </MDBCardBody>
  </MDBCard>)
    }})}
  </div>
</>
  )
}

export default Men
