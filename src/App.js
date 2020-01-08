import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Login from "./components/login.js";
import ChatView from "./components/chatView.js";


import io from "socket.io-client"; //måste vara med i varje fil som har kontakt med server

var socket = io("http://3.120.96.16:3000");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Anna",
      inputValue: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin() {
    //här ska validering in, regex
    this.setState({ username: this.state.inputValue });
    this.setState({ inputValue: "" });
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    let login = (
      <Login
        loginFunc={this.handleLogin}
        changeFunc={this.handleChange}
        inputField={this.state.inputValue}
      />
    );
    let chatView = <ChatView username={this.state.username} />;
    return (
      <div className="App">
        <Header />
        {this.state.username ? chatView : login}
      </div>
    );
  }
}

export default App;

/*         var socket = io('http://3.120.96.16:3000');

        socket.on('connect', function () {
            console.log("CONNECTED!")
        });
        socket.on('messages', function (data) {
            console.log(data) // en lista med alla
        });

        socket.on('new_message', message => {
            console.log("NEW MESSAGE", message) // meddelande var för sig
        })
        socket.emit("message", {
            username: "AnnaEEE",
            content: "heeeeej"
        }); */
