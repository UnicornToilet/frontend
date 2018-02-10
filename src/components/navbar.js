import React from 'react';
import {Link} from 'react-router-dom';
import Auth from './auth';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
  
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <h1 className="navbar-text">
         Unicorn Toilet
        </h1>
      </nav>
    );
  }
}
