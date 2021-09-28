import React from 'react';
// import logo from '../images/logo.jpg';
import {NavLink} from 'react-router-dom';

function NavBar(){
    
    return (
        <div className="NavBar">
            

            <nav className='nav'>
                    <div className="profile">
                    <h4 className="nav-item mt-4">
                            <span className="px-2"><i className="fas fa-columns"></i></span>Dashboard
                    </h4>
                    </div>
                 <ul className="nav-items">
                      
                       <li className="nav-item">
                            <NavLink to="/admin/staff-list" exact activeclassname="active"><span className="px-2"><i className="fas fa-user"/></span>Staff</NavLink>
                       </li>
                       <li className="nav-item">
                            <NavLink to="/admin/notice-list" exact activeclassname="active"><span className="px-2"><i className="fas fa-file-invoice"/></span>Notice</NavLink>
                       </li>
                       <li className="nav-item">
                            <NavLink to="/admin/message-list" exact activeclassname="active"><span className="px-2"><i className="far fa-comment-alt"/></span>Message</NavLink>
                       </li>
                       <li className="nav-item">
                            <NavLink to="/admin/event-list" exact activeclassname="active"><span className="px-2"><i className="far fa-calendar"/></span>Event</NavLink>
                       </li>
                       <li className="nav-item">
                            <NavLink to="/admin/gallery-list" exact activeclassname="active"><span className="px-2"><i className="far fa-images"/></span>Gallery</NavLink>
                       </li><hr/>
                       <li className="nav-item">
                            <NavLink to="/admin/logOut" exact activeclassname="active"><span className="px-2"><i className="fas fa-sign-out-alt"/></span>Log Out</NavLink>
                       </li>
                       
                   </ul>
                   
            </nav>
            
        </div>
    )
    
}

export default NavBar;
