import React from "react"
import { Route, Redirect } from "react-router-dom"
import Dashboard from "./Dashboard"
import Article from "./Article"

class PrivateRoute extends React.Component {
  render(props) {
    let isLogged = localStorage.getItem("isLogged")
    return (
      <Route
        render={(rest) =>
          isLogged ? (
            <this.props.children.type {...this.props} />
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: "/" } }} />
          )
        }
      />
    )
  }
}

export default PrivateRoute
