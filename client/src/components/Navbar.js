import {Link} from 'react-router-dom';

function NavBar(){
return(
    <div className="headerNav container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div id="navbarNav">
                            <ul className="navbar-nav">
                                    <li>
                                        <Link className="nav-link" to="/"><i className="fas fa-home"></i></Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/about">हाम्रो बारेमा </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/gallery/Nagarik-WadaPatra">नागरिक वडापत्र</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/notice">सुचना </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/event">योजना तथा कार्यक्रम </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/staffs">कर्मचारी विवरण </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/gallery">ग्यार्लरी</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/contact">सम्पर्क</Link>
                                    </li>
                            </ul>
                        </div>
                            
                       
  
            </nav>
    </div>
    
  
    )
    
    
}

export default NavBar;
