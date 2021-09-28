
function ContactItem() {
    return (
      <div className="Contact container">
        <div className="contact-items">
            <div>
                               <div className="row">
                                       <div className="col-lg-6">
                                       <iframe title="Sichai-Map" width="450" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=27.8940548253235,%2085.1415889687856&t=k&z=13&ie=UTF8&iwloc=&output=embed" 
                                       frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> 
                                      
                                       </div>

                                       <div className="col-lg-6">
                                               
                                                               <div className="col-md-12">
                                                               <div className="card">
                                                               <i className="fas fa-phone fa-2x"></i>
                                                                    <div className="right-items">
                                                                        <h4>Phone No.</h4>
                                                                        <h6>010-560909</h6>
                                                                    </div>
                                                                </div>
                                                               </div>

                                                                <div className="col-md-12">
                                                                <div className="card">
                                                                <i className="far fa-envelope fa-2x"></i>
                                                                    <div className="right-items">
                                                                        <h4>Email</h4>
                                                                        <h6>wreidd.nuwakot@gmail.com</h6>
                                                                    </div>
                                                                </div>
                                                               </div>
                                                                <div className="col-md-12">
                                                                <div className="card">
                                                                <i className="fab fa-facebook fa-2x"></i>
                                                                    <div className="right-items">
                                                                        <h4>Others</h4>
                                                                        <h6>FaceBook</h6>
                                                                     
                                                                    </div>
                                                                </div>
                                                               </div>
                                              
                                       </div>
                               </div>
            </div>
        </div>
           
        
      
      </div>
    );
  }
  
  export default ContactItem;
  