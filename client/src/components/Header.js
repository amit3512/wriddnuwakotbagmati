import logo from '../images/logo.png';
import logo1 from '../images/nepal-flag.gif';

function Header() {
  return (
    <div className="Header">
      <div className="header-items">
           <div className="header-image">
                <img src={logo} alt="logo" className="logo1"></img>
                <img src={logo1} alt="logo" className="logo2"></img>
           </div>
         
        <div className="header-text">
                <p><b>प्रदेश सरकार </b></p>
                <h5>बागमती प्रदेश</h5>
                <h6>भौतिक पुर्वाधार विकास मन्त्रालय</h6>
                <h4>जलस्रोत तथा सिंचाइ विकास डिभिजन कार्यालय</h4>
                <p>नुवाकोट</p>
        </div>
        
        </div>
      <hr/>
    </div>
  );
}

export default Header;
