import React from "react";
import io from "socket.io-client";

class ChatWrite extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io("http://3.120.96.16:3000");
    this.state = {
      content: ""
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
  }

  handleSendMessage() {
    this.socket.emit("message", {
      username: this.props.username,
      content: this.state.content
    });
    this.setState({ content: "" });
  }

  handleOnchange(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    return (
      <div className="chatWrite">
        <div className="chatWrite-top">
          <textarea
            className="chatWrite-top-textarea"
            placeholder="Write new message"
            minLength="1"
            maxLength="200"
            value={this.state.content}
            onChange={this.handleOnchange}
          />
          <button
            className="chatWrite-top-sendButton"
            onClick={this.handleSendMessage}
          >
            Send
          </button>
        </div>
        <div className="chatWrite-bottom">
          <p className="chatWrite-bottom-p">
            New message requires 1-200 characters
          </p>
        </div>
      </div>
    );
  }
}

export default ChatWrite;

/*  */
