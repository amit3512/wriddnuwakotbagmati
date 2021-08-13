
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getPhoto,deletePhoto} from "../../actions/adminActions";


const GalleryList = () =>{

const galleries = useSelector((state)=>state.galleries.galleries);
const dispatch = useDispatch();

const onDelete = (id) =>{
    dispatch(deletePhoto(id));
}

useEffect( () => {
        dispatch(getPhoto());
},[]);

if (galleries === undefined) {
    return <h4 alt="loading..." className="text-center mt-5"> Loading Photos... </h4>
  }
    return(
        <div>
            {!localStorage.getItem("userTokenTime")?(
                <div>
                    <Redirect to="/signIn" />
                </div>
            ):(
                <div className="container">
                    <h4 className="text-center">Galleries</h4>
                <div className="row">
                    <div className="col-md-10">
                             <table className="table table-border">
                             
                                 <thead>
                                     <tr>
                                         <th>S.N</th>
                                         <th>Date</th>
                                         <th>Category</th>
                                         <th>Title</th>
                                         <th></th>
                                         <th></th>
    
                                     </tr>
                                 </thead>
                                    
                                 {galleries && galleries.map((user,index)=>{
                                        return (
                                        <tbody>
                                    
                                            <tr key={index+1}>
                                            <td>{index+1}</td>
                                            <td>{user.date}</td>
                                            <td>{user.category}</td>
                                            <td>{user.title}</td>
                                             {/* <td ><img  src={user.image} className="listing-images" alt="profile img" width="100" height="100"/></td> */}
                                            <td >{user.image.map((x,index)=><img key={index} src={x} className="listing-images" width="100" height="100" alt="profile img"/>)}</td>
                                            <td className="EditDeleteButton">
                                                {/* <a href={`/staff/${user._id}`}><button className="btn btn-warning m-1">Edit</button></a> */}
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
                                 <a href="/admin/addPhoto"><button className="btn btn-primary">Add Photo</button></a>
                             </div>
                    </div>
                </div>
            </div>
             )} 
        </div>
        
    )
}

export default GalleryList;