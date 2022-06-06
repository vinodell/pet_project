import React from "react";

class HelloComp extends React.Component {
  render() {
    return <h1>Ola! Hi, {this.props.master}! Hi {this.props.name}</h1>;}
}

export default HelloComp