import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Login from "./components/login.js";
import ChatView from "./components/chatView.js";

import io from "socket.io-client";

var socket = io("http://3.120.96.16:3000");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      inputValue: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleExitChat = this.handleExitChat.bind(this);
  }

  handleLogin() {
    //här ska validering in, regex
    this.setState({ username: this.state.inputValue });
    this.setState({ inputValue: "" });
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleExitChat() {
    this.setState({ username: "" });
  }

  render() {
    let login = (
      <Login
        loginFunc={this.handleLogin}
        changeFunc={this.handleChange}
        inputField={this.state.inputValue}
      />
    );
    let chatView = (
      <ChatView username={this.state.username} exitChat={this.handleExitChat} />
    );
    return (
      <div className="App">
        <Header />
        {this.state.username ? chatView : login}
      </div>
    );
  }
}

export default App;
