// import logo from '../images/staff.png';
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getStaff} from "../actions/adminActions";
import Fade from "react-reveal";
import Slide from "react-reveal/Slide";

function Staff() {

    const staffs = useSelector((state)=>state.staffs.staffs);
    const dispatch = useDispatch();

    useEffect( () => {
         dispatch(getStaff());
 },[]);

    if (staffs === undefined) {
        return <h4 alt="loading..." className="text-center mt-5"> Loading Staffs... </h4>
      }
    return (
       <div className="Staff container">
           <div>
               <h4 className="text-center bg-light">कर्मचारीहरुको विवरण</h4>
           </div>
          <div>
                 <div className="row">
                     {staffs.map((staff,index)=>{
                         return(
                            <div className="col-md-4" key={index}>
                            <div className="card">
                                <Slide top>
                                        <div className="staff-image">
                                        <img className="card-img-top img-thumbnail" src={staff.image} alt="staff"/>
                                        </div>
                                </Slide>
                               
                                   <Fade left>
                                   <div className="card-body">
                                        <h5 className="card-title">{staff.name}</h5>
                                        <p className="card-text">{staff.designation}</p>
                                        <p className="card-text">{staff.phone}</p>
                                        <p className="card-text">{staff.email}</p>
                                        {/* <a href="/#" className="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                   </Fade>
                                  
                            </div>
                     </div>
                         )
                                        
                     })}
                    

                 </div>
          </div>
      </div>
    );
  }
  
  export default Staff;
  