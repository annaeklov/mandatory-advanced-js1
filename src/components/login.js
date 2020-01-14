import React from "react";
import picLogin from "../img/picLogin.png";
import picLogin2 from "../img/picLogin2.png";
import picLogin3 from "../img/picLogin3.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    // props finns för att kunna ta emot state från föräldrar eller att skicka state neråt till barn. Just denna constructor har inga state pga det finns inget som ska ändras på, det ligger i app.js
  }

  render() {

    return (
      <div className="loginCont">
        <h2 className="login-h2">Please login to join chat</h2>
        <input
          className="login-inputField"
          type="text"
          required
          placeholder="Username"
          onChange={this.props.changeFunc} // kommer från en metod i app.js
          value={this.props.inputField} // kommer från en state i app.js
        />
        <p className="login-p">
          Username requires 1-12 characters <br />
          (åäö is not allowed)
        </p>  
        <button className="login-button" onClick={this.props.loginFunc} /* kommer från en metod i app.js */ > 
          Login
        </button> 
        <div className="login-pic-cont">
          <img className="login-pic" src={picLogin} />
          <img className="login-pic" src={picLogin2} />
          <img className="login-pic" src={picLogin3} />
        </div>
      </div>
    );
  }
}

export default Login;
