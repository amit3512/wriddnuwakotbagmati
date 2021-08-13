import CreateEvent from './CreateEvent';
import UpdateEvent from './UpdateEvent';
import {useSelector,useDispatch} from 'react-redux';
import React, { useState, useEffect } from 'react';
import { addEvent, updateEvent } from '../../actions/adminActions';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

function Notice(props) {
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [redirect, setRedirect] = useState(false);
    
    const events = useSelector((state)=>state.notices.notices);
    const dispatch = useDispatch();
 

    useEffect(() => {
       
        getEventDetails(events);
        
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

const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {date:date,name:name,description:description}
        dispatch(addEvent(formData));
        setRedirect(true);
}

const handleUpdate = (e) => {
  const id = props.match.params.id;
  e.preventDefault();
        const formData = {date:date,name:name,description:description}
        dispatch(updateEvent(id,formData));
        setRedirect(true);
}

const getEventDetails=()=>{
  const id =props.match.params.id;

  axios.get(`/admin/events/${id}`).then((res)=>{
    if(res.data.success){
      console.log(res.data)
      setDate(res.data.event.date);
      setName(res.data.event.name);
      setDescription(res.data.event.description);
     }
  })
};



return(
  <div>
     {redirect?(
             <div> 
                <Redirect to="/admin/event-list" />
             </div>
         ):(
          <div className="container">
          {
            !props.match.params.id?
            (
              <CreateEvent 
              handleDate={handleDate}
              handleName={handleName}
              handleDescription={handleDescription}
              date={date}
              name={name}
              description={description}
              handleSubmit={handleSubmit}
              />
            ):(
              <UpdateEvent
              handleDate={handleDate}
              handleName={handleName}
              handleDescription={handleDescription}
              date={date}
              name={name}
              description={description}
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
