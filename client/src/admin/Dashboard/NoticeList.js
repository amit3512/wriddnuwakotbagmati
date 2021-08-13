import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getNotice, deleteNotice} from "../../actions/adminActions";


const NoticeList = () =>{

const data = useSelector((state)=>state.notices.notices);
const dispatch = useDispatch();

const onDelete = (id) =>{
    dispatch(deleteNotice(id));
}

useEffect( () => {
        dispatch(getNotice());
},[dispatch]);

if (data === undefined) {
    return <h4 alt="loading..." className="text-center mt-5"> Loading Notices... </h4>
  }
    return(
        <div>
            {!localStorage.getItem("userTokenTime")?(
                <div>
                    <Redirect to="/signIn" />
                </div>
            ):(
                <div className="container">
                     <h4 className="text-center">Notices</h4>
                <div className="row">
                         <div className="col-md-10">
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
                                                {/* <td dangerouslySetInnerHTML={{__html:user.description}}></td> */}
                                             {/* <td ><img  src={user.image} className="profile_image" alt="profile img"/></td> */}
                                            {/* <td >{user.image.map((x,index)=><img key={index} src={x} className="profile_image" alt="profile img"/>)}</td> */}
                                            <td className="EditDeleteButton">
                                                <a href={`/notice/${user._id}`}><button className="btn btn-warning m-1">Edit</button></a>
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
                                            <a href="/admin/addNotice"><button className="btn btn-primary">Add Notice</button></a>
                                        </div>
                        </div>
                </div>
            </div>
             )} 
        </div>
        
    )
}

export default NoticeList;
