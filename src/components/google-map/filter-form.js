import React from 'react';

class FilterForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return (
      <h1> Filter Form </h1>
    )
  }
}

export default FilterForm