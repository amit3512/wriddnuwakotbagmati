import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const UpdateEvent = ({
    handleDate,
    handleName,
    handleDescription,
    date,
    name,
    description,
    handleSubmit
}) =>{

return(
<div className="container">
    <div className="row mt-5">
        {/* <div className="col-md-4"></div> */}
            <div className="col-md-12 border">
            <form>

                            <div className="form-group">
                                
                                <input type="text" className="form-control" id="formGroupExampleInput1"
                                name="date"  value={date} onChange={handleDate} />
                                
                            </div>
                                <div className="form-group">
                                
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Notice Title" 
                                name="name" value={name} onChange={handleName}/>
                        
                                </div>
                                <div className="form-group">
                                            {/* <label for="formGroupExampleInput3">Room No.</label> */}
                                            <CKEditor 
                                            editor={ ClassicEditor }
                                            data={description} 
                                            onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            handleDescription(
                                            data
                                            )
                                            console.log( { event, editor, data } );
                                        } }/>
                                            
                                 </div>
                               
                        <button className="btn btn-success my-3" type="submit" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    </div>
    

</div>

)
}

export default UpdateEvent;
