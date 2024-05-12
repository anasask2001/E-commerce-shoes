import React, { useContext, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import icon from '../Assets/Iconmome-removebg-preview.png'
import Form from 'react-bootstrap/Form';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Data } from '../App';
import {
  MDBCard,
  MDBCardBody,


  MDBCardImage,

  MDBRipple
} from 'mdb-react-ui-kit';

function Payment() {
  const {cart,order,setorder}=useContext(Data)
  const [value, setvalue,setusers,users,isuser] = useState(false)
  
  const placeOrder = () => {
    setorder(cart);
    const placeorder= users.map(x=>x.useremail == isuser.useremail?{...x,order:order}:x);
    setusers(placeorder)
    
  }

  return (

    <div style={{marginLeft:'10px'}}>
    <h3>Select Payment Method</h3>
    <form onSubmit={(e)=>e.preventDefault()}> 
 <input type='radio' name="a" onChange={()=>setvalue(!value)}/><label>Credit or debit card</label>
 <br/>
 <input type='radio'  name="a" onChange={()=>setvalue(!value)}/><label>Net Banking</label>
 <Form.Select  aria-placeholder='Choose An Option' style={{width:'35vh',height:'5vh'}}>
      <option value="1">HDFC Bank</option>
      <option value="2">ICICI Bank</option>
      <option value="3">State Bank of India</option>
      <option value="2">Fedaralbank Bank</option>
    
    </Form.Select>
 <br/>
 <input type='radio'  name="a" onChange={()=>setvalue(!value)}/><label>Other Upi Apps</label>
 { value ?<> <p>Please enter your UPI ID</p>
 <input type='text' placeholder='Enter UPI Id'/><MDBBtn  style={{ width:'75px',height:'32px'}} color='black'>verify</MDBBtn> </> :""
 }

<br/>
 <input type='radio'  name="a" onChange={()=>setvalue(!value)}/><label>EMI</label>
 <br/>

 <input style={{opacity:'1',pointerEvents:'none', color:'grey'}} type='radio'  name="a"/><label>Cash on Delivery/Pay on Delivery </label>
<p>Unavailable for this payment</p>
<div>
{cart.map((x) => (
            <div key={x.id}>
      <MDBCard  style={{width:'30%'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={x.imgUrl} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h1>{x.name}</h1>
      <h5>{'₹'+x.price*x.qty}</h5>
        <button onClick={placeOrder}>Conform order</button>
      </MDBCardBody>
   
    </MDBCard>
             
             
    
            </div>
          ))}
</div>
 </form>

 



    </div>
  )
}

export default Payment