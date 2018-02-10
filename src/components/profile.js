import React from 'react';
import superagent from 'superagent';

const emptyState = {
  overallQuality: 0,
  tpQuality: 0,
  occupancy: '',
  soap: '',
  dryingMethod: '',
  babyChanging: '',
};

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = emptyState;
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.persist();
    let {name,value} = e.target;
    this.setState({[name]:value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      overallQuality: e.target.value,
      tpQuality: e.target.value,
      occupancy: e.target.value,
      soap: e.target.value,
      dryingMethod: e.target.value,
      babyChanging: e.target.value,
    });
    superagent.post(`${__AUTH_URL__}/profiles`, {
      overallQuality: this.state.overallQuality,
      tpQuality: this.state.tpQUality,
      occupancy: this.state.occupancy,
      soap: this.state.soap,
      dryingMethod: this.state.dryingMethod,
      babyChanging: this.state.babyChanging,
    })
      .then(res => {
        console.log('Prefrences Saved!');
      })
      .catch(err => {
        console.log(err, 'Failed to add prefrences.');
      });
    this.setState(emptyState);
  }

  render() {
    return (
      <React.Fragment>
        <form className='filter-form' onSubmit={this.handleSubmit}>

          <h1>Set Prefrences</h1>

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

          <h2> Occupancy </h2>
          <input type='radio' id='single' name='occupancy' value='single' onChange={this.handleChange}/>
          <label htmlFor='single'> Single </label>

          <input type='radio' id='multiple' name='occupancy' value='multiple' onChange={this.handleChange}/>
          <label htmlFor='multiple'> Multiple </label>

          <br/>

          <h2> Soap Type </h2>
          <input type='radio' id='gel' name='soap' value='gel' onChange={this.handleChange}/>
          <label htmlFor='gel'> Gel </label>

          <input type='radio' id='foam' name='soap' value='foam' onChange={this.handleChange}/>
          <label htmlFor='foam'> Foam </label>

          <br/>

          <h2> Drying Method </h2>
          <input type='radio' id='paperTowel' name='dryingMethod' value='paper towel' onChange={this.handleChange}/>
          <label htmlFor='paperTowel'> Paper Towel </label>

          <input type='radio' id='airDry' name='dryingMethod' value='air dry' onChange={this.handleChange}/>
          <label htmlFor='airDry'> Air Dry </label>

          <br/>

          <h2> Baby Changing Station </h2>
          <input type='radio' id='yes' name='babyChanging' value='true' onChange={this.handleChange}/>
          <label htmlFor='yes'> Yes </label>

          <input type='radio' id='no' name='babyChanging' value='false' onChange={this.handleChange}/>
          <label htmlFor='no'> No </label>

          <br/>
          <button type='submit'>Save Prefrences</button>
        </form>
      
      </React.Fragment>
    );
  }
}
export default Profile;
