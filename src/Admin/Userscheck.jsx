
import React, { useContext } from 'react'
import { Adminhome } from './Adminhome'
import { Data } from '../App'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate ,  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Userscheck = () => {
const navigate = useNavigate()
const { id } = useParams();
  

const{users,setusers}=useContext(Data)



const handleclick = (userId) => {
  navigate(`/Usersingle/${userId}`);
};

  return (
  <>


<MDBTable align='middle'>
  
<MDBTableHead>
  <tr>
    <th  scope='col'>Email</th>
    <th scope='col'>UserId</th>
    <th scope='col'>Status</th>

  </tr>
</MDBTableHead>
<MDBTableBody>
{users.map((x)=>x.role!=='admin'?
  
  <tr>
    <td>
      <div className='d-flex align-items-center'>
       
        <div className='ms-3'>
          <p className='text-muted mb-0' >{x.useremail}</p>
          <button onClick={() => handleclick(x.id)}>on</button>

         
        </div>
      </div>
    </td>
    <td>
      <p  className='fw-normal mb-1'>{x.username}</p>
   
    </td>
    <td>
      <MDBBadge color='success' pill>
        Active
      </MDBBadge>
    </td>

   
  </tr>
   :<></>)}

</MDBTableBody>
</MDBTable>






 
    
    </>
  )
}
