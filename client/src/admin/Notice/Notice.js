import CreateNotice from './CreateNotice';
import UpdateNotice from './UpdateNotice';
import {useDispatch} from 'react-redux';
import React, { useState, useEffect } from 'react';
import { addNotice, updateNotice } from '../../actions/adminActions';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { serverurl } from '../../config';

function Notice(props) {
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
   
    const [description, setDescription] = useState("");
    // const [image, setImage] = useState("");
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
 

    useEffect(() => {
       
        getNoticeDetails();
        // localStorage.getItem("user", JSON.stringify(all));
        
      },[]);
    
      const handleDate = e => {
        setDate(e.target.value);
      };
      const handleName = e => {
        setName(e.target.value);
      };
      const handleDescription = data => {
        setDescription(data);
      };

      // const handleImage = e => {
        
      //   setImage(e.target.files[0]);
      // };


const handleSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        //  for (let i = 0; i < image.length; i++) {
        //     formData.append("image", image[i])
        //   }
        // formData.append("date",date);
        // formData.append("name",name);
        const formData = {date:date,name:name,description:description}
        dispatch(addNotice(formData));
        setRedirect(true);
}

const handleUpdate = (e) => {
  const id = props.match.params.id;
  e.preventDefault();
        // const data = {date,name,phone,desc,take,give,remain,brief}
        // const formData = new FormData();
        // for (let i = 0; i < image.length; i++) {
        //   formData.append("image", image[i])
        // }
        // formData.append("date",date);
        // formData.append("name",name);
        const formData = {date:date,name:name,description:description}
        dispatch(updateNotice(id,formData));
        setRedirect(true);
}

const getNoticeDetails=()=>{
  const id =props.match.params.id;

  axios.get(`${serverurl}/admin/notices/${id}`).then((res)=>{
    if(res.data.success){
      console.log(res.data)
      // setImage(res.data.user.image);
      setDate(res.data.notice.date);
      setName(res.data.notice.name);
      setDescription(res.data.notice.description);
     }
  })
};



return(
  <div>
                 {redirect?(
             <div> 
                <Redirect to="/admin/notice-list" />
             </div>
         ):(
          <div className="container">
          {
            !props.match.params.id?
            (
              <CreateNotice 
              handleDate={handleDate}
              handleName={handleName}
              handleDescription={handleDescription}
              // handleImage={handleImage}
              date={date}
              name={name}
              description={description}
           
              // image={image}
              handleSubmit={handleSubmit}
              />
            ):(
              <UpdateNotice
              handleDate={handleDate}
              handleName={handleName}
              handleDescription={handleDescription}
              // handleImage={handleImage}
              date={date}
              name={name}
              description={description}
              // image={image}
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

export default Notice;
