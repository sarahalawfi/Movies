import React, { Component } from 'react';


class Cast extends Component {
    render() {
      return (
        <div>
  <li>{this.props.name.name}{this.props.name.role}</li>
      </div>
      );
    }
  }
  
  export default Cast;