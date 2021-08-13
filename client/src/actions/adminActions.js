import {ADD_STAFF,GET_STAFF,UPDATE_STAFF} from '../types';
import {ADD_NOTICE,GET_NOTICE,UPDATE_NOTICE} from '../types';
import {ADD_MESSAGE,GET_MESSAGE,UPDATE_MESSAGE} from '../types';
import {ADD_EVENT,GET_EVENT,UPDATE_EVENT} from '../types';
import {ADD_PHOTO,GET_PHOTO} from '../types';
import axios from 'axios';

//Staffs.....................................................
export const addStaff = (formData) => async (dispatch)=>{
 
  await axios.post("/admin/staffs/add",formData,{
    headers: {
     'Content-type':'multipart/form-data',
             }
     })
    .then((data) => {
      dispatch({ type: ADD_STAFF, payload: data });
      alert("Added Successfully");
      window.location.href="/admin/staff-list"
      });
};

export const getStaff = () => async (dispatch)=>{
    const staffs = await axios.get("/admin/staffs").then(res=>{
      return res.data;
    })
   const data = staffs.staffs
   dispatch({
         type:GET_STAFF,
         payload:data,
     })
  };

export const updateStaff = (id,formData) => async (dispatch)=>{
    await axios.put(`/admin/staffs/update/${id}`,formData,{
      headers: {
      //  'Content-type':'application/json',
       'Content-type':'multipart/form-data',
               }
       })
      .then((data) => {
        dispatch({ type: UPDATE_STAFF, payload: data });
        alert("Updated Successfully");
        window.location.href="/admin/staff-list"
        });
  };

  export const deleteStaff = (id) => async (dispatch)=>{
 
      axios.delete(`/admin/staffs/delete/${id}`, {
          headers: {
              'Content-Type': 'application/json',
          }
          }).then(()=>{
         dispatch(getStaff());
      });
  };

//Notices........................................
export const addNotice = (formData) => async (dispatch) =>
{
            await axios.post('/admin/notices/add',formData,{headers:{
            'Content-Type' : 'application/json',
            }}).then(data=>{
                dispatch({
                    type:ADD_NOTICE,
                    payload:data
                });
                alert('Notice Added Successfully');
                window.location.href="/admin/notice-list"
            });
}

  export const getNotice = (id) => async (dispatch)=>{
    if(id){
      const users = await axios.get(`/admin/notices/${id}`).then(res=>{
        return res.data;
      })
     const data = users.users
    
     dispatch({
           type:GET_NOTICE,
           payload:data,
       })
    }
    const users = await axios.get('/admin/notices').then(res=>{
      return res.data;
    })
   const data = users.users
  
   dispatch({
         type:GET_NOTICE,
         payload:data,
     })
  };

export const updateNotice = (id,formData) => async (dispatch)=>{
    await axios.put(`/admin/notices/update/${id}`,formData,{
      headers: {
        'Content-Type' : 'application/json',
               }
       })
      .then((data) => {
        dispatch({ type: UPDATE_NOTICE, payload: data.notices });
        alert("Updated Successfully");
        window.location.href="/admin/notice-list"
        });
  };


  export const deleteNotice = (id) => async (dispatch)=>{
      axios.delete(`/admin/notices/delete/${id}`, {
          headers: {
              'Content-Type': 'application/json',
              // 'Authorization':`${token.token}`
          }
          }).then(()=>{
        dispatch(getNotice());
      });
  };

 //Messages........................................
export const addMessage = (formData) => async (dispatch) =>
{
            await axios.post('/admin/messages/add',formData,{headers:{
            'Content-Type' : 'application/json',
            }}).then(data=>{
              dispatch(getMessage());
                dispatch({
                    type:ADD_MESSAGE,
                    payload:data
                });
                alert('Notice Added Successfully');
               
            });
}

  export const getMessage = () => async (dispatch)=>{
    const messages = await axios.get('/admin/messages').then(res=>{
      return res.data;
    })
   const data = messages.messages
 
   dispatch({
         type:GET_MESSAGE,
         payload:data,
     })
  };

export const updateMessage = (id,formData) => async (dispatch)=>{
    await axios.put(`/admin/messages/update/${id}`,formData,{
      headers: {
        'Content-Type' : 'application/json',
               }
       })
      .then((data) => {
        dispatch({ type: UPDATE_MESSAGE, payload: data.notices });
        alert("Updated Successfully");
        });
  };


  export const deleteMessage = (id) => async (dispatch)=>{
 
      axios.delete(`/admin/messages/delete/${id}`).then(()=>{
        alert("Deleted Successfully");
        dispatch(getMessage());
      });
    
  };

  //Event Actions ...................................
  
  export const addEvent = (formData) => async (dispatch) =>
  {
              await axios.post('/admin/events/add',formData,{headers:{
              'Content-Type' : 'application/json',
              }}).then(data=>{
                  dispatch({
                      type:ADD_EVENT,
                      payload:data
                  });
                  alert('Event Added Successfully');
                  dispatch(getMessage());
              });
  }
  
    export const getEvent = (id) => async (dispatch)=>{
      if(id){
          var users = await axios.get(`/admin/events/${id}`).then(res=>{
          return res.data;
        })}
       
      else{
           users = await axios.get('/admin/events').then(res=>{
          return res.data;
        })
      }
       const data = users.users
      
       dispatch({
             type:GET_EVENT,
             payload:data,
         })
      
      
    };
  
  export const updateEvent = (id,formData) => async (dispatch)=>{
      await axios.put(`/admin/events/update/${id}`,formData,{
        headers: {
          'Content-Type' : 'application/json',
                 }
         })
        .then((data) => {
          dispatch({ type: UPDATE_EVENT, payload: data.events });
          alert("Updated Successfully");
          });
    };
  
  
    export const deleteEvent = (id) => async (dispatch)=>{
   
    
        axios.delete(`/admin/events/delete/${id}`).then(()=>{
           dispatch(getEvent());
        });
    };

    // Gallery

   export const addPhoto = (formData) => async (dispatch) =>
  {
              await axios.post('/admin/galleries/multiple',formData,{headers:{
              'Content-type' : 'multipart/form-data',
              }}).then(data=>{
                  dispatch({
                      type:ADD_PHOTO,
                      payload:data
                  });
                  alert('Photo Added Successfully');
                  window.location.href="/admin/gallery-list"
              });
  }

  export const getPhoto = (category) => async (dispatch)=>{
    if(category){
      var galleries = await axios.get(`/admin/galleries/${category}`).then(res=>{
        return res.data;
      })
    } 
    else{
       galleries = await axios.get('/admin/galleries').then(res=>{
        return res.data;
      })
    }
     const data = galleries.galleries
    
     dispatch({
           type:GET_PHOTO,
           payload:data,
       })
    
   
  };

  export const getPhotoByTitle = (title) => async (dispatch)=>{
   
      var galleries = await axios.get(`/admin/galleries/title/${title}`).then(res=>{
        return res.data;
      })

     const data = galleries.galleries
    
     dispatch({
           type:GET_PHOTO,
           payload:data,
       })
    
   
  };
  
  export const deletePhoto = (id) => async (dispatch)=>{
      axios.delete(`/admin/galleries/delete/${id}`).then(res=>{
          dispatch(getPhoto());
      })
  };
