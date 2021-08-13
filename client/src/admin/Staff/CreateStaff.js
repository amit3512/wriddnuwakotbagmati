
const CreateStaff = ({
        handleName,
        handleDesignation,
        handlePhone,
        handleEmail,
        handleOrderBy,
        handleImage,
        name,
        designation,
        phone,
        email,
        orderBy,
        handleSubmit
}) =>{

return(
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-4"></div>
                <div className="col-md-4 border">
                <form encType="multipart/form-data">
                                    <div className="form-group">
                                    
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Staff Name" 
                                    name="name" value={name} onChange={handleName}/>
                            
                                    </div>

                                    <div className="form-group">
                                    
                                    <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Designation" 
                                    name="designation" value={designation} onChange={handleDesignation}/>
                            
                                    </div>

                                    <div className="form-group">
                                    
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone No." 
                                    name="phone" value={phone} onChange={handlePhone}/>
                                    
                                    </div>

                                    <div className="form-group">
                                    
                                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Email Address" 
                                    name="email" value={email} onChange={handleEmail}/>
                                    
                                    </div>

                                    <div className="form-group">
                                    
                                    <input type="number" className="form-control" id="formGroupExampleInput4" placeholder="Order By" 
                                    name="orderBy" value={orderBy} onChange={handleOrderBy}/>
                                    
                                    </div>
                        
                                    <div className="form-group">
                                    
                                        <input type="file" className="form-control" id="formGroupExampleInput5"
                                        name="image" onChange={handleImage}/>
                                        
                                    </div>
                            <button className="btn btn-success my-3" type="submit" onClick={handleSubmit}>Submit</button>
                </form>

            </div>
        </div>
        
  
    </div>
    
)
}

export default CreateStaff;
