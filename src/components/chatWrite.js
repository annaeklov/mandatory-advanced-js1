import React from "react";

class ChatWrite extends React.Component {
  constructor(props) {
    super(props);
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
          ></textarea>
          <button className="chatWrite-top-sendButton">Send</button>
        </div>
        <div className="chatWrite-bottom">
          <p className="chatWrite-bottom-p">New message requires 1-200 characters</p>
        </div>
      </div>
    );
  }
}

export default ChatWrite;
