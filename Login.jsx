import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        Organization_id: "",
        Organization_password: ""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };

  login = event => {
    let Organization_id = this.state.loginParams.Organization_id;
    let Organization_password = this.state.loginParams.Organization_password;
    if (Organization_id === "Tim's Thieves" && Organization_password === "letmein") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.login} class="ribbon">
          <h1 className="h3 mb-3 font-weight-normal">Access the voting system</h1>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="Organization_id"
                onChange={this.handleFormChange}
                placeholder="Enter Organization name"
              />
              <input
                type="password"
                name="Organization_password"
                onChange={this.handleFormChange}
                placeholder="Enter Secret Key"
              />
              <input type="submit" value="I'm Ready to Vote" />
            </div>
          </div>
          <p>The Secret Key should have been given to you by your organization beforehand!</p>
        </form>
      </div>
    );
  }
}
export default Login;
