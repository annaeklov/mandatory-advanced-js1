import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'; //måste vara med i varje fil som har kontakt med server

class App extends React.Component {
  render(){
    var socket = io('http://3.120.96.16:3000');

  return (
    <div className="App">
  <p>Hej</p>
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
