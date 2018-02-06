import React from 'react';

const emptyState = {
  overallQuality: null,
  tpQuality: null,
  occupancy: null,
  soap: null,
  drying: null,
  babyChanging: null
};

class FilterForm extends React.Component {

  constructor(props){
    super(props);

    this.state = emptyState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name,value} = e.target;
    this.setState({name:value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return (
      <form className='filter-form'>
        <h2> Overall Quality </h2>
        <input type='radio' id='overallQuality' name='overallQuality'/>
        <label for='overallQuality'> 1 </label>
      </form>
    )
  }
}

export default FilterForm