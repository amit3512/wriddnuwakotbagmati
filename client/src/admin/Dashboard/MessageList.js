import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getMessage, deleteMessage} from "../../actions/adminActions";


const MessageList = () =>{

const data = useSelector((state)=>state.messages.messages);
const dispatch = useDispatch();

const onDelete = (id) =>{
    dispatch(deleteMessage(id));
}

useEffect( () => {
        dispatch(getMessage());
},[]);

if (data === undefined) {
    return <h4 alt="loading..." className="text-center mt-5"> Loading Messages... </h4>
  }
    return(
        <div>
            {!localStorage.getItem("userTokenTime")?(
                <div>
                    <Redirect to="/signIn" />
                </div>
            ):(
                <div className="container">
                     <h4 className="text-center">Messages</h4>
                <div className="row">
                         <div className="col-md-10">
                             <table className="table table-border">
                             
                                 <thead>
                                     <tr>
                                         <th>#</th>
                                         <th>नाम </th>
                                         <th>सन्देश</th>
                                         <th></th>
                                         <th></th>
    
                                     </tr>
                                 </thead>
                                    
                                 {data && data.map((user,index)=>{
                                        return (
                                        <tbody key={index+1}>
                                    
                                            <tr>
                                                <td>1</td>
                                                <td>{user.name}</td>
                                                <td dangerouslySetInnerHTML={{__html:user.message}}></td>
                                             {/* <td ><img  src={user.image} className="profile_image" alt="profile img"/></td> */}
                                            {/* <td >{user.image.map((x,index)=><img key={index} src={x} className="profile_image" alt="profile img"/>)}</td> */}
                                            <td className="EditDeleteButton">
                                                <a href={`/message/${user._id}`}><button className="btn btn-warning m-1">Edit</button></a>
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
                                 <a href="/admin/addMessage"><button className="btn btn-primary">Add Message</button></a>
                             </div>
                        </div>
                </div>
            </div>
             )} 
        </div>
        
    )
}

export default MessageList;