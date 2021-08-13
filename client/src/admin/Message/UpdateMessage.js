import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const UpdateMessage = ({
    handleName,
    handleMessage,
    name,
    message,
    handleSubmit
}) =>{

return(
<div className="container">
    <div className="row mt-5">
            <div className="col-md-12 border">
            <form>

                                <div className="form-group">
                                
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" 
                                name="name" value={name} onChange={handleName}/>
                        
                                </div>

                                <div className="form-group">
                                            <CKEditor 
                                            editor={ ClassicEditor }
                                            data={message} 
                                            onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            handleMessage(
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

export default UpdateMessage;
