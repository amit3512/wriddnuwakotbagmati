
const CreateStaff = ({
    handleDate,
    handleCategory,
    handleTitle,
    handleImage,
    date,
    category,
    title,
    // image,
    handleSubmit
}) =>{

return(
<div className="container">
    <div className="row mt-5">
        <div className="col-md-4"></div>
            <div className="col-md-4 border">
            <form encType="multipart/form-data">
                                <div className="form-group">
                                
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Date" 
                                name="date" value={date} onChange={handleDate}/>
                        
                                </div>

                                <div className="form-group">
                                    
                                        <select type="text" className="form-control" id="formGroupExampleInput1" 
                                        name="category" value={category} onChange={handleCategory}>
                                                <option defaultValue="">Choose Category...</option>
                                                <option value="Event">Event</option>
                                                <option value="Training">Training</option>
                                                <option value="Office">Office</option>
                                                <option value="Nagarik-WadaPatra">Nagarik-WadaPatra</option>
                                        </select>
                            
                                    </div>

                                <div className="form-group">
                                
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Title" 
                                name="title" value={title} onChange={handleTitle}/>
                                
                                </div>

                                <div className="form-group">
                                
                                    <input type="file" className="form-control" id="formGroupExampleInput3"
                                    name="image" onChange={handleImage} multiple/>
                                    
                                </div>
                        <button className="btn btn-success my-3" type="submit" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    </div>
    

</div>

)
}

export default CreateStaff;
