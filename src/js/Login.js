import React from "react"
import { Button } from "react-bootstrap"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      pwd: "",
      isLogged: false,
      error: false,
    }
  }

  handleChange = (event, input) => {
    console.log(event.target.value)
    if (input === "email") this.setState({ email: event.target.value })

    if (input === "pwd") this.setState({ pwd: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ isLogged: true }, console.log("SetState Done"))
    localStorage.setItem("isLogged", true)
  }

  logOut = (event) => {
    event.preventDefault()
    localStorage.removeItem("isLogged")
    this.setState({ isLogged: false })
  }

  render() {
    let checkStorageLogin = localStorage.getItem("isLogged")
    let userLogged = this.state.isLogged
    let jsx_logged_off = (
      <div>
        <h1 style={{ color: "red" }}>Vous etes déjà authentifié</h1>
        <button onClick={this.logOut}>log out</button>
      </div>
    )
    let jsx_logged_in = (
      <div className="Login">
        <h3>Authentifiez-vous</h3>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Enter Email:
            <input
              type="email"
              required
              placeholder="Your eamil here"
              value={this.state.email}
              onChange={(e) => this.handleChange(e, "email")}
            />
          </label>
          <label>
            Enter Password:
            <input
              type="password"
              required
              placeholder="Your password here"
              value={this.state.pwd}
              onChange={(e) => this.handleChange(e, "pwd")}
            />
          </label>
          &nbsp;
          <Button type="submit">Login</Button>
        </form>
      </div>
    )
    let jsx = jsx_logged_in
    if (checkStorageLogin) jsx = jsx_logged_off
    return jsx
  }
}

export default Login
