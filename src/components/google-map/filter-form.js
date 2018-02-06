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
    e.persist();
    let {name,value} = e.target;
    this.setState({[name]:value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return (
      <form className='filter-form' onSubmit={this.handleSubmit}>
        <h2> Overall Quality </h2>
          <input type='radio' id='overallQuality1' name='overallQuality' value='1' onChange={this.handleChange}/>
          <label htmlFor='overallQuality1'> 1 </label>

          <input type='radio' id='overallQuality2' name='overallQuality' value='2' onChange={this.handleChange}/>
          <label htmlFor='overallQuality2'> 2 </label>

          <input type='radio' id='overallQuality3' name='overallQuality' value='3' onChange={this.handleChange}/>
          <label htmlFor='overallQuality3'> 3 </label>

          <input type='radio' id='overallQuality4' name='overallQuality' value='4' onChange={this.handleChange}/> 
          <label htmlFor='overallQuality4'> 4 </label>

          <input type='radio' id='overallQuality5' name='overallQuality' value='5' onChange={this.handleChange}/>
          <label htmlFor='overallQuality5'> 5 </label>

          <br/>

          <h2> TP Quality </h2>
          <input type='radio' id='tpQuality1' name='tpQUality' value='1' onChange={this.handleChange}/>
          <label htmlFor='tpQuality1'> 1 </label>

          <input type='radio' id='tpQuality2' name='tpQUality' value='2' onChange={this.handleChange}/>
          <label htmlFor='tpQuality2'> 2 </label>

          <input type='radio' id='tpQuality3' name='tpQUality' value='3' onChange={this.handleChange}/>
          <label htmlFor='tpQuality3'> 3 </label>

          <input type='radio' id='tpQuality4' name='tpQUality' value='4' onChange={this.handleChange}/>
          <label htmlFor='tpQuality4'> 4 </label>

          <input type='radio' id='tpQuality5' name='tpQUality' value='5'onChange={this.handleChange}/>
          <label htmlFor='tpQuality5'> 5 </label>

          <br/>

          
        
          <br/>
      <button type='submit'> submit </button>
      </form>
    )
  }
}

export default FilterForm