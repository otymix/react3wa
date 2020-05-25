import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Article from "./Article.js"

class Dashboard extends React.Component {
  render() {
    let jsx = this.props.data.map((element) => (
      <Router>
        <li style={{ listStyleType: "none" }}>
          <Link to={"/article"}>{element.title}</Link>

          <Switch>
            <Route
              path="/article"
              render={() => (
                <Article title={element.title} content={element.content} />
              )}
            />
          </Switch>
        </li>
      </Router>
    ))

    return (
      <div className="Dashboard">
        <h1>Dashboard </h1>
        {jsx}
      </div>
    )
  }
}

export default Dashboard
