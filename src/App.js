import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component  {
  constructor(props){
    super(props);
    this.state = {
user:"",
password:"",
isValid:false
    };
  }
  handleUsernameChange=(e)=>{
    this.setState({user:e.target.value});}
    handlePasswordChange=(e)=>{
    this.setState({password:e.target.value});}
    handleSubmit=(e)=>{
      e.preventDefault();
      const {user,password} = this.state;
      if(user==="admin" && password==="123456"){
        this.setState({isValid:true});
      }else{
        this.setState({isValid:false});
      }
    }
  render() {
    const { isValid } = this.state;
  return (
    <div className="login-form">
      <h2>Login</h2>
      {isValid && <p className="success-message">Đăng nhập thành công</p>}
      {!isValid && <p className="error-message">Đăng nhập không thành công</p>}
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={this.handleUsernameChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
  }
}

export default Login;
