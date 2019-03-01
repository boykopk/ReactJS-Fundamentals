import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }

    this.handleChange = props.handleChange.bind(this);
  }

  render() {
    return (
      <div className="Register">
        <h1>Register</h1>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state, true)}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Ivan Ivanov" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="ivan@gmail.com" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="******" />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Register;
