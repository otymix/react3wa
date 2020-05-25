import React from "react"

class Article extends React.Component {
  render() {
    return (
      <div className="Article">
        <h1>Article</h1>
        <h1 style={{ color: "blue" }}>{this.props.title}</h1>
        <h1 style={{ color: "cyan" }}>{this.props.content}</h1>
      </div>
    )
  }
}

export default Article
