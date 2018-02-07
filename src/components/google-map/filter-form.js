import React from 'react';

const emptyState = {
  overallQuality: null,
  tpQuality: null,
  occupancy: null,
  soap: null,
  drying: null,
  babyChanging: null,
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
        <input type='radio' id='overallQuality1' name='overallQuality' value='1'/>
        <label htmlFor='overallQuality1'> 1 </label>

        <input type='radio' id='overallQuality2' name='overallQuality' value='2'/>
        <label htmlFor='overallQuality2'> 2 </label>

        <input type='radio' id='overallQuality3' name='overallQuality' value='3'/>
        <label htmlFor='overallQuality3'> 3 </label>

        <input type='radio' id='overallQuality4' name='overallQuality' value='4'/>
        <label htmlFor='overallQuality4'> 4 </label>

        <input type='radio' id='overallQuality5' name='overallQuality' value='5'/>
        <label htmlFor='overallQuality5'> 5 </label>

        <button type='submit'> submit </button>
      </form>
    );
  }
}

export default FilterForm;
