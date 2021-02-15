import React, { Component } from 'react'



export default class Login extends Component { 
  state = {
    email: '',
    password: ''
  };
  movetoTable  = () => {
     if 
         (this.state.username === "lavanya" && this.state.password ==="123"){
      this.props.history.push("/table")
     }
            else{
         this.props.history.push('/login')
     }

 }
    
 handleusername= event => {
    this.setState({ username: event.target.value});
  }
  
  handlePassword = event => {
    this.setState({ password: event.target.value});
  }
  render () {
      console.log(this.props)
    return (
      <form>
       
        <label>username</label>
        <input type="text" placeholder="enter your name" onChange={this.handleusername} />
        <label>Password</label>
        <input type="password"placeholder="password" onChange={this.handlePassword} />
        <button onClick={this.movetoTable}>submit</button>
       
      </form>
    );
  }
}