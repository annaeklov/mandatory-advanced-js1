import React from "react";
import picLogin from "../img/picLogin.png";
import picLogin2 from "../img/picLogin2.png";
import picLogin3 from "../img/picLogin3.png";


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginCont">
        <h2 className="login-h2">Please login to join chat</h2>
        <input
          className="login-inputField"
          type="text"
          placeholder="Username"
          onChange={this.props.changeFunc}
          value={this.props.inputField}
        ></input>
        <p className="login-p">Username requires 1-12 characters</p>
        <button className="login-button" onClick={this.props.loginFunc}>
          Login
        </button>
        <div className="login-pic-cont">
          <img className="login-pic" src={picLogin}></img>
          <img className="login-pic" src={picLogin2}></img>
          <img className="login-pic" src={picLogin3}></img>
        </div>
      </div>
    );
  }
}

export default Login;
