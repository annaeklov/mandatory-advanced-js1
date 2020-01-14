import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Login from "./components/login.js";
import ChatView from "./components/chatView.js";

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

  //när man klickar på login-knappen
  handleLogin() {
    if (this.state.inputValue.trim().length == 0) {
      this.setState({ inputValue: "" });
      return;
    }
    this.setState({ username: this.state.inputValue });
    this.setState({ inputValue: "" });
  }

  //när det skrivs något i input i login
  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  //när man trycker på logout-knappen
  handleExitChat() {
    this.setState({ username: "" });
  }

  render() {
    let login = (
      <Login
        loginFunc={this.handleLogin} //denna som gör att login.js kan använda metoden. i login.js skriver man onClick={this.props.loginFunc} på knappen
        changeFunc={this.handleChange} // onChange={this.props.changeFunc} i login.js
        inputField={this.state.inputValue} // value={this.props.inputField} i login.js
      />
    );
    let chatView = (
      <ChatView
        username={this.state.username} // username={this.props.username} i både chatWrite.js och chatView.js
        exitChat={this.handleExitChat} // onClick={this.props.exitChat} i chatView på logout-knapp
      />
    );
    let validUsername = /^[a-zA-Z0-9\ \_\-]+$/g.test(this.state.username);
    return (
      <div className="App">
        <Header />
        {validUsername ? chatView : login}
      </div>
    );
  }
}

export default App;
