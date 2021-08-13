import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getEvent} from "../../actions/adminActions";
function Eventslice() {

    const events = useSelector((state)=>state.events.events);
    const dispatch = useDispatch();

    useEffect( () => {
         dispatch(getEvent());
 },[]);

  if (events === undefined) {
        return <h4 alt="loading..." className="text-center mt-5"> Loading events... </h4>
      }
  return (
    
    <div className="container Event">
      <div className="event-items">
          <div className="event-icon bg-light">
               <h5 className="text-center">योजना तथा कार्यक्रम <i className="fas fa-tasks"/></h5>
          </div>
         <div className="event-text bg-white">
               <table className="table">
                   <thead>
                  
                       <tr>
                           <th>मिति</th>
                           <th>शिर्षक</th>
                           <th></th>
                       </tr>
                   </thead>
                 
                     
                        <tbody>
                        {events.slice(0,2).map((event,index)=>{
                               return(
                        <tr key={index+1}>
                            <td>{event.date}</td>
                            <td><Link to={`/event/${event._id}`}>{event.name}</Link></td>
                            <td></td>
                        </tr>
                        )    })}
                       
                    </tbody>
                      
                   
               
                   
               </table>
               <div className='button text-center'>
               <Link to="/event"><button className="btn btn-primary">थप जानकारी</button>  </Link>
               </div>
               
            </div>
              
         </div>
         
      
    
    </div>
  );
}

export default Eventslice;
