import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


function Footer() {
  return (
    <div className="Footer container-fluid">
      <div className="footer-items">
        <div className="footer-text">
            <img src={logo} alt="logo" className="logo1"></img>
            <h4>नेपाल सरकार </h4>
            <div className="row footer-link">
           
                <div className="col-md-4">
                 
                         <h5>उपयोगी लिंकहरु</h5><hr/>
                          <p><i className="fas fa-arrow-right"/><a href="https://www.moewri.gov.np/">ऊर्जा, जलस्रोत तथा सिंचाइ मन्त्रालय, सिंहदरबार, काठमाडौं</a></p>
                          <p><i className="fas fa-arrow-right"/><Link to="#">जलस्रोत तथा सिंचाई विभाग, ललितपुर काठमाडौं</Link></p>
                          <p><i className="fas fa-arrow-right"/><Link to="#">जल तथा मौसम विज्ञान विभाग, काठमाडौं</Link></p>
                          <p><i className="fas fa-arrow-right"/><Link to="#">कर्मचारी सञ्चय कोष, पुलचोक, ललितपुर</Link></p>
                          <p><i className="fas fa-arrow-right"/><Link to="#">नागरिक लगानी कोष, नयाँ बानेश्वर, काठमाडौं</Link></p>
                  </div>
             
                  <div className="col-md-4 staff-footer">
                  <h5>कार्यालय समय</h5><hr/>
                        <h6>आइतबार - बिहिबार : <p>10am - 5pm</p></h6>
                        <h6>शुक्रबार : <p>10am - 2pm</p></h6>
                        <h6>शनिबार : <p>सार्वजनिक बिदा </p></h6>
                        <i className="fab fa-facebook"/><i className="fab fa-twitter"/><i className="fab fa-instagram"/>        
                   </div>

                <div className="col-md-4 staff-footer">
                        <h5>सम्पर्क</h5><hr/>
                          <h6><b>Phone</b></h6>
                          <h6><i className="fas fa-phone"></i>+977 010-560909</h6>
                        
                          <h6><b>Email</b></h6>
                        <h6><i class="fas fa-envelope-open"></i>wreidd.nuwakot@gmail.com</h6>
                         
                </div>
                
               
            </div>
        </div>
        
        
      </div>
     
    </div>
  );
}

export default Footer;
