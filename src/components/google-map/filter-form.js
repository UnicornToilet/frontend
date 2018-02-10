import React from 'react';
import {connect} from 'react-redux';
import {filterToilets} from './actions';

const emptyState = {
  owner: null,
  overallQuality: 0,
  tpQuality: 0,
  soap: '',
  drying: '',
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
    this.props.actions.filterToilets(this.state);
    this.props.handleSubmit('showFilter');
  }

  render(){
    return (
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Preferences</label>
        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Overall Quality</option>
          <option id='overallQuality1' name='overallQuality' value='1' onChange={this.handleChange}>One</option>
          <option id='overallQuality2' name='overallQuality' value='2' onChange={this.handleChange}>Two</option>
          <option id='overallQuality3' name='overallQuality' value='3' onChange={this.handleChange}>Three</option>
          <option id='overallQuality4' name='overallQuality' value='4' onChange={this.handleChange}>Four</option>
          <option id='overallQuality5' name='overallQuality' value='5' onChange={this.handleChange}>Five</option>
        </select>
        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Toilet Paper Quality</option>
          <option id='tpQuality1' name='tpQUality' value='1' onChange={this.handleChange}>One</option>
          <option id='tpQuality2' name='tpQUality' value='2' onChange={this.handleChange}>Two</option>
          <option id='tpQuality3' name='tpQUality' value='3' onChange={this.handleChange}>Three</option>
          <option id='tpQuality4' name='tpQUality' value='4' onChange={this.handleChange}>Four</option>
          <option id='tpQuality5' name='tpQUality' value='5' onChange={this.handleChange}>Five</option>
        </select>
        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Soap Type</option>
          <option id='gel' name='soap' value='gel' onChange={this.handleChange}>Gel</option>
          <option id='foam' name='soap' value='foam' onChange={this.handleChange}>Foam</option>
        </select>
        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Drying Method</option>
          <option id='paperTowel' name='drying' value='paper towel' onChange={this.handleChange}>Paper Towel</option>
          <option id='airDry' name='drying' value='air dry' onChange={this.handleChange}>Air</option>
        </select>

        <button type="submit" className="btn btn-primary my-1">Submit</button>
      </form>
    );
  }
}

export default FilterForm;
