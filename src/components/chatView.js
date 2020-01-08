import React from "react";
import ChatWrite from "./chatWrite.js";
import picLogin from "../img/picLogin.png";
import picLogin2 from "../img/picLogin2.png";
import picLogin3 from "../img/picLogin3.png";

class ChatView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chatView">
        <div className="chatViewTop">
          <h2 className="chatView-h2">Logged in as: <p>{this.props.username}</p></h2>
          <div className="chatView-pic-cont">
            <img className="chatView-pic" src={picLogin}></img>
            <img className="chatView-pic" src={picLogin2}></img>
            <img className="chatView-pic" src={picLogin3}></img>
          </div>
        </div>
        <div className="chatViewInner"></div>
        <ChatWrite />
      </div>
    );
  }
}

export default ChatView;
