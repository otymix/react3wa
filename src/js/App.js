import React from "react"
import "../App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import Navbar from "./Navbar"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"

function App() {
  const posts = [
    { id: 16, title: "React JS", content: "Libraire ou Framework ?" },
    { id: 11, title: "React Native", content: "Mobile React" },
    { id: 100, title: "Angular", content: "Super ..." },
    { id: 7, title: "Symfony", content: "Framework expressif ..." },
    { id: 27, title: "MongoDB", content: "Base de données NoSQL" },
  ]

  return (
    //make use of the ROuter/BrowserRouter as we are going to route in our App
    //Always the router should be in the upper component App in that case

    //Switch is used to make direct links between the paths and components... see Switch below
    <Router>
      <div className="App">
        <Navbar />
        <header>
          <p>React APP</p>
          <h1>Bienvenue sur la page principale</h1>
        </header>

        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/login" component={Login} />

          <PrivateRoute path="/dashboard" isLogged={true} data={posts}>
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

export default App
