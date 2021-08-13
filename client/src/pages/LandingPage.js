import Carousel from "../components/Carousel";
import Message from "../components/Message";
import NoticeSlice  from "../components/Notice/NoticeSlice";
import EventSlice  from "../components/Event/EventSlice";
import logo from '../images/staff.jpg';
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());
import Fade from 'react-reveal/Fade';

function LandingPage() {
  return (
    <div className="container">
     <Carousel/>
     <Fade top>
                    <div className="Message mt-5">
                          <div className="card">
                                <div className="text-center mt-2">
                              
                                    <img src={logo} alt="profile-img" />
                               
                                </div>
                               
                                    <Message/>
                                
                          </div>
                    </div>
      </Fade>
      <Fade left>
             <NoticeSlice/>
      </Fade>
      <Fade right>
             <EventSlice/>
      </Fade>
     
   
     
    
    </div>
  );
}

export default LandingPage;
