import { Route } from "react-router";
import { useState } from "react";
import NavBar from "./NavBar";
import "../../App.scss";
import AdminStaff from "../../admin/Staff/Staff";
import AdminNotice from "../../admin/Notice/Notice";
import AdminEvent from "../../admin/Event/Event";
import AdminMessage from "../../admin/Message/Message";
import AdminGallery from "../../admin/Gallery/Gallery";
import StaffList from "./StaffList";
import NoticeList from "./NoticeList";
import EventList from "./EventList";
import MessageList from "./MessageList";
import GalleryList from "./GalleryList";
import AdminLogOut from "../User/LogOut";

function Dashboard() {
  const [navToggle, setnavToggle] = useState(false);

  const navClick = () => {
    setnavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className="hide-on-print">
        <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
          <NavBar />
        </div>
      </div>

      <div className={`${navToggle ? "main-content" : "main-content-full"}`}>
        <div className="content">
          <div className="text-center bg-light">
            <div
              className={`${navToggle ? "nav-btn nav-toggle-move" : "nav-btn"}`}
              onClick={navClick}
            >
              <div className="lines-1"></div>
              <div className="lines-2"></div>
              <div className="lines-3"></div>
            </div>
            <h4>WELCOME TO ADMIN DASHBOARD</h4>
            <h5>MANAGE YOUR CONTENT HERE!</h5>
          </div>
          <Route path="/admin/staff-list" exact component={StaffList} />
          <Route path="/admin/addStaff" exact component={AdminStaff} />
          <Route path="/staff/:id" exact component={AdminStaff} />
          <Route path="/admin/notice-list" exact component={NoticeList} />
          <Route path="/admin/addNotice" exact component={AdminNotice} />
          <Route path="/notice/:id" exact component={AdminNotice} />
          <Route path="/admin/event-list" exact component={EventList} />
          <Route path="/admin/addEvent" exact component={AdminEvent} />
          <Route path="/event/:id" exact component={AdminEvent} />
          <Route path="/admin/message-list" exact component={MessageList} />
          <Route path="/admin/addMessage" exact component={AdminMessage} />
          <Route path="/message/:id" exact component={AdminMessage} />
          <Route path="/admin/gallery-list" exact component={GalleryList} />
          <Route path="/admin/addPhoto" exact component={AdminGallery} />
          <Route path="/admin/logOut" exact component={AdminLogOut} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
