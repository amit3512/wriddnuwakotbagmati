import axios from "axios";
import React from "react";
// import Header from "../components/Header";
// import Modal from "react-modal";
// import {Redirect} from "react-router-dom";

class EventBoard extends React.Component {

  constructor(props){
    super(props);
    this.state={
              events:[],
              
    }
  };
  componentDidMount(){
    this.getEventBoard();
  }

  async getEventBoard(){
    const id = this.props.match.params.id;
    const event = await axios.get(`/admin/events/${id}`).then(res=>{
        return res.data.event;
    })
    console.log(event)
    this.setState({
        events:event
    })
    
  }
 
  openModal = (events) => {
    this.setState({ events });
  };

  closeModal = () =>{
    this.setState({ events:null });
       (window.location.href="/event")
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
      {!this.state.events?(
        <div>...Loading</div>
      ):(
                   <>
                   {/* <Modal isOpen={true} onRequestClose={this.closeModal}> */}
                  
                                <div className="eventBoard container">
                                    {/* <div>
                                            <Header/>
                                    </div> */}
                                    <div className="bg-white">
                                            <p>०७८-{this.state.events.date}</p>
                                            <h4 className="text-center py-3"><u>{this.state.events.name}</u></h4>
                                            <p dangerouslySetInnerHTML={{__html:this.state.events.description}}></p>
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

export default EventBoard;

