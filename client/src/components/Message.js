import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getMessage} from "../actions/adminActions";
function Message() {

  const messages = useSelector((state)=>state.messages.messages);
  const dispatch = useDispatch();

  useEffect( () => {
       dispatch(getMessage());
},[]);

  if (messages === undefined) {
      return <h4 alt="loading..." className="text-center mt-5"> Loading Message... </h4>
    }
  return (
    <>
    {messages.map((message,index)=>{
      return(
        <div key={index}>
              <h4 className='text-center mt-3'>{message.name}</h4>
              <h5 className='text-center mt-3'>कार्यालय प्रमुख </h5>
              <hr/>
              <div className="message">
              <h5><i className="far fa-comment-alt"></i> <b>संदेश</b></h5>
                  <p dangerouslySetInnerHTML={{__html:message.message}}>
                
                  </p>
              </div>

         </div>
      )
    })}
        
    </>
    
  );
}

export default Message;
