import React from "react"
import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"
function Navbar() {
  return (
    <Nav justify className="navbar-dark bg-dark">
      <img
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        style={{
          width: "30px",
          height: "30px",
          margin: "5px",
        }}
      />
      <Nav.Item>
        <Nav.Link href="/" style={{ color: "white" }}>
          Home
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/dashboard" style={{ color: "white" }}>
          Dashboard
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/login" style={{ color: "white" }}>
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navbar
