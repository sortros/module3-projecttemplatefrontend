import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      this.props.login({
        email, 
        password
      })
    } catch(e){
      console.log(e);
    } finally {
      this.props.history.push('/home');
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default withAuth(Login);
