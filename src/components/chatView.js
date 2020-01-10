import React from "react";
import io from "socket.io-client";
import ChatWrite from "./chatWrite.js";
import picLogin from "../img/picLogin.png";
import picLogin2 from "../img/picLogin2.png";
import picLogin3 from "../img/picLogin3.png";

class ChatView extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io("http://3.120.96.16:3000");
    this.state = {
      messageList: []
    };
    this.scrollBar = React.createRef();
    this.handleScrollBar = this.handleScrollBar.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  componentDidMount() {
    this.socket.on("messages", data => {
      this.setState({ messageList: data });
      this.handleScrollBar();
    });

    this.socket.on("new_message", this.handleNewMessage);
  }

  handleNewMessage(data) {
    this.setState({ messageList: [...this.state.messageList, data] });
    this.handleScrollBar();
  }

  handleScrollBar() {
    this.scrollBar.current.scrollTo(0, this.scrollBar.current.scrollHeight);
  }

  componentWillUnmount() {
    this.socket.off("new_message", this.handleNewMessage);
  }

  render() {
    let renderChat = this.state.messageList.map(message => {
      return (
        <div className="chatView-messageBox" key={message.id}>
          <p className="chatView-messageBox-username">{message.username}</p>
          <p className="chatView-messageBox-content">{message.content}</p>
        </div>
      );
    });

    return (
      <div className="chatView">
        <div className="chatViewTop">
          <h2 className="chatView-h2">
            Logged in as: <p>{this.props.username}</p>
          </h2>
          <div className="chatView-pic-cont">
            <img className="chatView-pic" src={picLogin}></img>
            <img className="chatView-pic" src={picLogin2}></img>
            <img className="chatView-pic" src={picLogin3}></img>
          </div>
        </div>
        <div className="chatViewInner" ref={this.scrollBar}>
          {this.state.messageList.length ? renderChat :
            <p className="loading">Loading...</p>}
        </div>
        <ChatWrite username={this.props.username} />
        <button className ="chatView-logoutBtn" onClick={this.props.exitChat}>Logout</button>
      </div>
    );
  }
}

export default ChatView;


