import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getEvent} from "../../actions/adminActions";
import {Link} from 'react-router-dom';
import Pagination from '../../components/Pagination';
import Fade from 'react-reveal/Fade';

function Event() {

    const [currentPage,setCurrentPage] = useState(1);
    let postsPerPage = 5;
    var events = useSelector((state)=>state.events.events);
    // console.log(events.slice(0,2));
    const dispatch = useDispatch();

    useEffect( () => {
         dispatch(getEvent());
 },[]);

const paginate = (pageNumber)=>{
  setCurrentPage(pageNumber);
}

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
// events = events.slice(indexOfFirstPost, indexOfLastPost);
  if (events === undefined) {
        return <h4 alt="loading..." className="text-center"> Loading events... </h4>
      }
  return (
    <Fade bottom>
               <div className="container Event">
      <div className="event-items">
          <div className="event-icon bg-light">
               <h5 className="text-center">योजना तथा कार्यक्रम  <i className="fas fa-tasks"></i></h5>
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
                        {events.slice(indexOfFirstPost, indexOfLastPost).map((event,index)=>{
                               return(
                        <tr key={index+1}>
                            <td>{event.date}</td>
                            <td><Link to={`/event/${event._id}`}>{event.name}</Link></td>
                            {/* <td dangerouslySetInnerHTML={{__html:event.description}}></td> */}
                        </tr>
                        )    })}
                       
                    </tbody>
                      
                   
               
                   
               </table>
               <div className='button text-center'>
                 <Pagination
                 postsPerPage={postsPerPage}
                 totalPosts={events.length}
                 paginate={paginate}/>
               </div>
               
            </div>
              
         </div>
         
      
    
    </div>
    </Fade>
   
  );
}

export default Event;
