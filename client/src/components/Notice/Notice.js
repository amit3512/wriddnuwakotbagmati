import {useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNotice} from "../../actions/adminActions";
import {Link} from 'react-router-dom';
import Pagination from '../../components/Pagination';
import Fade from 'react-reveal/Fade';

function Notice() {
   
    const notices = useSelector((state)=>state.notices.notices);
    const dispatch = useDispatch();
    const [currentPage,setCurrentPage] = useState(1);
    let postsPerPage = 5;
    useEffect( () => {
         dispatch(getNotice());
 },[]);

 const paginate = (pageNumber)=>{
  setCurrentPage(pageNumber);
}

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;

  if (notices === undefined) {
        return <h4 alt="loading..." className="text-center"> Loading Notices... </h4>
      }
  return (
    <Fade bottom>
                 <div className="container Notice">
                        <div className="notice-items">
                            <div className="notice-icon bg-light">
                                <h5 className="text-center">सुचना <i className="fas fa-volume-up"/></h5>
                            </div>
                          <div className="notice-text bg-white">
                                <table className="table">
                                    <thead>
                                    
                                        <tr>
                                            <th>मिति</th>
                                            <th>शिर्षक</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                  
                                      
                                          <tbody>
                                          {notices.slice(indexOfFirstPost, indexOfLastPost).map((notice,index)=>{
                                                return(
                                          <tr key={index+1}>
                                              <td>{notice.date}</td>
                                              <td><Link to={`/notice/${notice._id}`}>{notice.name}</Link></td>
                                          </tr>
                                          )    })}
                                        
                                      </tbody>
                                        
                                    
                                
                                    
                                </table>
                                <div className='button text-center'>
                                <Pagination
                                  postsPerPage={postsPerPage}
                                  totalPosts={notices.length}
                                  paginate={paginate}/>
                                </div>
                                
                              </div>
                                
                          </div>
                    </div>
    </Fade>
   
  );
}

export default Notice;
