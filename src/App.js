import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Login from "./components/login.js";
import ChatView from "./components/chatView.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", //kunna uppdatera sida och fortfarande vara inloggad
      inputValue: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleExitChat = this.handleExitChat.bind(this);
  }

  handleLogin() {
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
      <ChatView 
        username={this.state.username} 
        exitChat={this.handleExitChat} 
      />
    );

    let validUsername = /[a-z_-]{1,12}/g.test (this.state.username); // åäö ska INTE funka, det måste dit
    return (
      <div className="App">
        <Header />
        {validUsername ? chatView : login}
      </div>
    );
  }
}

export default App;
