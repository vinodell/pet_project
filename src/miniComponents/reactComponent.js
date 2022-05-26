import React from "react";

class HelloComp extends React.Component {
  render() {
    return <h1>Ola! Hi, Team! Hi {this.props.name}</h1>;}
}

export default HelloComp