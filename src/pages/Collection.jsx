import React from 'react'
import { Data } from '../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn } from 'mdb-react-ui-kit'
import { Container } from 'react-bootstrap'


function Collection() {
  const navigate=useNavigate()

const{Products,setProducts}=useContext(Data)

  return (
    
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between', width:'100%'}}>
 
      {Products.map((x)=>
      

      <MDBCard  style={{width:'250px',  marginBottom:'10px', position:'relative'}} >
           <div className='bg-image hover-zoom'>
    <MDBCardImage className='w70' src={x.imgUrl} position='top' alt='...' />
    </div>
      <MDBCardBody>
        <MDBCardTitle>{x.name}</MDBCardTitle>
        <p>{'₹'+x.price}</p>
        <MDBCardText>
        A shoe is an item of footwear intended to protect and comfort the human foot. 
        </MDBCardText>
        <MDBBtn color='black' style={{position:'absolute', bottom:'10px'}} onClick={()=>navigate(`/${x.id}`)}>show</MDBBtn>
      </MDBCardBody>
    </MDBCard>

 
      
      
      
      )}
    </div>
  )
}

export default Collection