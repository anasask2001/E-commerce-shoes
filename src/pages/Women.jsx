import React, { useContext } from 'react'
import { Data } from '../App'
import { MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn } from 'mdb-react-ui-kit'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Women() {
  const{Products,setProducts}=useContext(Data)
  const navigate=useNavigate()
  
   
        return (
          
          <div  style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between', width:'100%'}}>
           
          {Products.map((y)=>{if(y.ProductCategory==='WOMEN' ||  y.ProductCategory ==='KIDS_GIRLS' ){
            return(
       <MDBCard  style={{width:'250px', marginBottom:'10px',position:'relative'}}>
        <div className='bg-image hover-zoom'>
        <MDBCardImage className='w70' src={y.ProductImage} position='top' alt='...' />
        </div>
   
    <MDBCardBody >
      <MDBCardTitle>{y.ProductTitle}</MDBCardTitle>
      <p>{'₹'+y.ProductPrice}</p>

      <MDBCardText>
      A shoe is an item of footwear intended to protect and comfort the human foot. 
     
      </MDBCardText>
     <div >
     <MDBBtn color='black' style={{position:'absolute', bottom:'10px'}} onClick={()=>navigate(`/${y._id}`)}>show</MDBBtn>
     </div>
    </MDBCardBody>
  </MDBCard>)
               }})}      
           
      </div>
      
  )
}

export default Women