import { Route } from "react-router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import Staff from "./components/Staff";
import Notice from "./components/Notice/Notice";
import Event from "./components/Event/Event";
import './App.scss';
import ContactItem from "./components/ContactItem";
import LogIn from "./admin/User/LogIn";
import AdminDashboard from "./admin/Dashboard/Dashboard";
import NoticeBoard from "./components/Notice/NoticeBoard";
import EventBoard from "./components/Event/EventBoard";
import GalleryBoard from "./components/Gallery/GalleryBoard";
import EventsBoard from "./components/Gallery/EventBoard";
import AllPhotos from "./components/Gallery/AllPhotos";

function App() {  
  return (
    <>
    {localStorage.getItem('userTokenTime')?(
      <div className="AdminPage">
        <AdminDashboard/>
      </div>
                      
    ):(
      <div className="FrontPage">
      
      <Header />
      {/* <div className="navbar-hamburger container" onClick={handleNavToggle}>
          <i className="fas fa-bars"></i>
      </div> */}
      {/* <div className={`${navToggle ? "Display":"noDisplay"}`}> */}
            <Navbar />
      {/* </div> */}
         {/* <div className={`${navToggle ? "landingBottom":"landingTop"}`}> */}
            <Route path="/" exact component={LandingPage}/>
            <Route path="/about" exact component={About}/>
            <Route path="/notice" exact component={Notice}/>
            <Route path="/notice/:id" exact component={NoticeBoard}/>
            <Route path="/event" exact component={Event}/>
            <Route path="/event/:id" exact component={EventBoard}/>
            <Route path="/staffs" exact component={Staff}/>
            <Route path="/gallery" exact component={GalleryBoard}/>
            <Route path="/gallery/:category" exact component={EventsBoard}/>
            <Route path="/individual/:title" exact component={AllPhotos}/>
            <Route path="/contact" exact component={ContactItem}/>
            <Route path="/admin/login" exact component={LogIn}/>
            {/* <Route path="/printDoc/:id" exact component={PrintDoc}/> */}
            <Footer/>
        {/* </div> */}
      </div>
    )}
    
    
    </>
  );
}

export default App;
