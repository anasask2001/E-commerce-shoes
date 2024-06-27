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
    {Products.map((x)=>{if(x.ProductCategory=='MEN' || x.ProductCategory === 'KIDS_BOYS') { 
      return(
    
    <MDBCard   style={{width:'250px',  marginBottom:'10px' ,position:'relative'}} >
      <div className='bg-image hover-zoom'>
    <MDBCardImage className='w70' src={x.ProductImage} position='top' alt='...' />
    </div>
    <MDBCardBody >
      <MDBCardTitle>{x.ProductTitle}</MDBCardTitle>
      <p>{'₹'+x.ProductPrice}</p>
      <MDBCardText>
      {x.ProductDescription}
      </MDBCardText>
      <MDBBtn color='black' style={{position:'absolute', bottom:'10px'}} onClick={()=>navigate(`/${x._id}`)}>show</MDBBtn>
    </MDBCardBody>
  </MDBCard>)
    }})}
  </div>
</>
  )
}

export default Men
