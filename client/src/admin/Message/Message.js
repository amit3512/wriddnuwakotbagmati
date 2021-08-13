import CreateMessage from './CreateMessage';
import UpdateMessage from './UpdateMessage';
import {useDispatch} from 'react-redux';
import React, { useState, useEffect } from 'react';
import { addMessage, updateMessage } from '../../actions/adminActions';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { serverurl } from '../../config';


function Message(props) {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [redirect, setRedirect] = useState(false)
  
    const dispatch = useDispatch();
 

    useEffect(() => {
        getMessageDetails();
        },[]);
    
      const handleName = e => {
        setName(e.target.value);
      };
      const handleMessage = data => {
        setMessage(data);
      };

const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {name:name,message:message}
        dispatch(addMessage(formData));
        setRedirect(true);
}

const handleUpdate = (e) => {
  const id = props.match.params.id;
  e.preventDefault();
  const formData = {name:name,message:message}
  dispatch(updateMessage(id,formData));
  setRedirect(true);
}

const getMessageDetails=()=>{
  const id =props.match.params.id;
   axios.get(`${serverurl}/admin/messages/${id}`).then((res)=>{
    if(res.data.success){
      console.log(res.data)
      setName(res.data.message.name);
      setMessage(res.data.message.message);
     }
  })
};



return(
  <div>
      {redirect?(
             <div> 
                <Redirect to="/admin/message-list" />
             </div>
                ):(
                        <div className="container">
                        {
                          !props.match.params.id?
                                  (
                                    <CreateMessage 
                                    handleName={handleName}
                                    handleMessage={handleMessage}
                                    name={name}
                                    message={message}
                                    handleSubmit={handleSubmit}
                                    />
                                  ):(
                                    <UpdateMessage
                                    handleName={handleName}
                                    handleMessage={handleMessage}
                                   
                                    name={name}
                                    message={message}
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

export default Message;
