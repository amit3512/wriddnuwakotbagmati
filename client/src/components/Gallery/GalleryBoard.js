
function Gallery() {
    return (
       <div className="Staff container">
           <div>
               <h4 className="text-center bg-light">फोटोहरु</h4>
           </div>
          <div>
                 <div className="row">
                            <div className="col-md-4">
                                    <div className="card">
                                            <div className="card-body">
                                                <p className="card-text">Event</p>
                                                <a href="/gallery/Event" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                            
                                    </div>
                            </div>

                            <div className="col-md-4">
                                    <div className="card">
                                            <div className="card-body">
                                                <p className="card-text">Training</p>
                                                <a href="/gallery/Training" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                            
                                    </div>
                            </div>

                            <div className="col-md-4">
                                    <div className="card">
                                            <div className="card-body">
                                                <p className="card-text">Office</p>
                                                <a href="/gallery/Office" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                            
                                    </div>
                            </div>
                            <div className="col-md-4">
                                    <div className="card">
                                            <div className="card-body">
                                                <p className="card-text">Nagarik WadaPatra</p>
                                                <a href="/gallery/Nagarik-WadaPatra" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                            
                                    </div>
                            </div>
                  </div>
          </div>
         
      </div>
    );
  }
  
  export default Gallery;
  

