import CreateStaff from './CreateStaff';
import UpdateStaff from './UpdateStaff';
import {  useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { addStaff, updateStaff } from '../../actions/adminActions';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { serverurl } from '../../config';


function Staff(props) {
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const [image, setImage] = useState("");
    const [redirect, setRedirect] = useState(false);
    
  
    const dispatch = useDispatch();
    
    useEffect(() => {
       getStaffDetails();
    },[]);

      const handleName = e => {
        setName(e.target.value);
      };

      const handleDesignation = e => {
        setDesignation(e.target.value);
      };
    
      const handlePhone = e => {
        setPhone(e.target.value);
      };

      const handleEmail = e => {
        setEmail(e.target.value);
      };

      const handleOrderBy = e => {
        setOrderBy(e.target.value);
      };

      const handleImage = e => {
        
        setImage(e.target.files[0]);
      };


const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",name);
        formData.append("designation",designation);
        formData.append("phone",phone);
        formData.append("email",email);
        formData.append("orderBy",orderBy);
        formData.append("image",image);
        dispatch(addStaff(formData));
        setRedirect(true);
}

const handleUpdate = (e) => {
        e.preventDefault();
        const id = props.match.params.id;
        const formData = new FormData();
        formData.append("name",name);
        formData.append("designation",designation);
        formData.append("phone",phone);
        formData.append("email",email);
        formData.append("orderBy",orderBy);
        formData.append("image",image);
        dispatch(updateStaff(id,formData));
        setRedirect(true);
}

const getStaffDetails=()=>{
  const id =props.match.params.id;

  axios.get(`${serverurl}/admin/staffs/${id}`).then((res)=>{
    if(res.data.success){
      console.log(res.data)
     setName(res.data.staff.name);
     setDesignation(res.data.staff.designation);
     setPhone(res.data.staff.phone);
     setEmail(res.data.staff.email);
     setOrderBy(res.data.staff.orderBy)
     }
  })
};



return(
  <div>
                 {redirect?(
             <div> 
                <Redirect to="/admin/staff-list" />
             </div>
         ):(
          <div className="container">
          {
            !props.match.params.id?
            (
              <CreateStaff 
              handleName={handleName}
              handleDesignation={handleDesignation}
              handlePhone={handlePhone}
              handleEmail={handleEmail}
              handleOrderBy={handleOrderBy}
              handleImage={handleImage}
            
              name={name}
              designation={designation}
              phone={phone}
              email={email}
              orderBy={orderBy}
              handleSubmit={handleSubmit}
              />
            ):(
              <UpdateStaff
              handleName={handleName}
              handleDesignation={handleDesignation}
              handlePhone={handlePhone}
              handleEmail={handleEmail}
              handleOrderBy={handleOrderBy}
              handleImage={handleImage}
            
              name={name}
              designation={designation}
              phone={phone}
              email={email}
              orderBy={orderBy}
              handleSubmit={handleUpdate}
              />
            )
          }
            
            
        </div>
         )

         }  

  </div>
     );
}

export default Staff;
