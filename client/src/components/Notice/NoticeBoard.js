import axios from "axios";
import React from "react";
// import Header from "../components/Header";
// import Modal from "react-modal";
// import {Redirect} from "react-router-dom";

class NoticeBoard extends React.Component {

  constructor(props){
    super(props);
    this.state={
              notices:[],
              
    }
  };
  componentDidMount(){
    this.getNoticeBoaard();
  }

  async getNoticeBoaard(){
    const id = this.props.match.params.id;
    const notice = await axios.get(`/admin/notices/${id}`).then(res=>{
        return res.data.notice;
    })
    console.log(notice)
    this.setState({
        notices:notice
    })
    
  }
 
  openModal = (notices) => {
    this.setState({ notices });
  };

  closeModal = () =>{
    this.setState({ notices:null });
       (window.location.href="/notice")
  }

  handlePrint = () =>{
    window.print();
  }
  // closeModal = () => {
  //   this.setState({ post:null });
  // };
  render(){
    return(
      <div>
      {!this.state.notices?(
        <div>...Loading</div>
      ):(
                   <>
                   {/* <Modal isOpen={true} onRequestClose={this.closeModal}> */}
                  
                                <div className="notice-board container">
                                    {/* <div>
                                            <Header/>
                                    </div> */}
                                    <div>
                                            <p>०७८-{this.state.notices.date}</p>
                                            <h4 className="text-center py-3"><u>{this.state.notices.name}</u></h4>
                                            <p dangerouslySetInnerHTML={{__html:this.state.notices.description}}></p>
                                    </div>
                                    <button className="print-button"onClick={this.handlePrint}>print</button>
                                </div>
                               
                 
                    {/* </Modal> */}
                  </>
          )}
      </div>
    )
  }
}

export default NoticeBoard;

