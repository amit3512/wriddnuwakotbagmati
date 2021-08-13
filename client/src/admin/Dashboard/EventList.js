import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getEvent, deleteEvent} from "../../actions/adminActions";


const EventList = () =>{

const data = useSelector((state)=>state.events.events);
const dispatch = useDispatch();

const onDelete = (id) =>{
    dispatch(deleteEvent(id));
}

useEffect( () => {
        dispatch(getEvent());
},[]);

if (data === undefined) {
    return <h4 alt="loading..." className="text-center mt-5"> Loading Events... </h4>
  }
    return(
        <div>
            {!localStorage.getItem("userTokenTime")?(
                <div>
                    <Redirect to="/signIn" />
                </div>
            ):(
                <div className="container">
                     <h4 className="text-center">Events</h4>
                <div className="row">
                
                    <div className="col-lg-10">
                             <table className="table table-border">
                             
                                 <thead>
                                     <tr>
                                         <th>मिति</th>
                                         <th>शीर्षक</th>
                                         <th>विवरण</th>
                                         <th></th>
                                         <th></th>
    
                                     </tr>
                                 </thead>
                                    
                                 {data && data.map((user,index)=>{
                                        return (
                                        <tbody key={index+1}>
                                            <tr>
                                                <td>{user.date}</td>
                                                <td>{user.name}</td>
                                                <td className="EditDeleteButton">
                                                    <a href={`/event/${user._id}`}><button className="btn btn-warning m-1">Edit</button></a>
                                                    <button className="btn btn-danger" onClick={()=>onDelete(`${user._id}`)}>Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                            )
                                        })}
                                </table>
                        </div>
                    
                    <div className="col-md-2">
                             <div className="add-button">
                                 <a href="/admin/addEvent"><button className="btn btn-primary">Add Event</button></a>
                             </div>
                     </div>
                </div>
            </div>
             )} 
        </div>
        
    )
}

export default EventList;
