import React from 'react';

const emptyState = {
  locationName: '',
  occupancy: null,
  soap: null,
  tpQuality: null,
  drying: null,
  babyChanging: null,
};

class AddToilet extends React.Component{
  constructor(props){
    super(props);
    this.state = emptyState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange(e){
    let {name, value} = e.target;
    this.setState({[name]:value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.actions.addToilet(this.state);
    // this.props.handleSubmit('showAddToilets');
    // this.setState(emptyState);
  }

  render(){
    return (
      <div>
        <form className='addToilet-form' onSubmit={this.handleSubmit}>

          <input type="text" name='locationName' onChange={this.handleChange} value={this.state.locationName}/>

          <h2>Toiet Paper Quality</h2>
          <input type='radio' id='tpQuality1' name='tpQuality' value='1' onChange={this.handleChange}/>
          <label htmlFor='tpQuality1'> 1 </label>
          <input type='radio' id='tpQuality2' name='tpQuality' value='2' onChange={this.handleChange}/>
          <label htmlFor='tpQuality2'> 2 </label>
          <input type='radio' id='tpQuality3' name='tpQuality' value='3' onChange={this.handleChange}/>
          <label htmlFor='tpQuality3'> 3 </label>
          <input type='radio' id='tpQuality4' name='tpQuality' value='4' onChange={this.handleChange}/>
          <label htmlFor='tpQuality4'> 4 </label>
          <input type='radio' id='tpQuality5' name='tpQuality' value='5' onChange={this.handleChange}/>
          <label htmlFor='tpQuality5'> 5 </label>

          <h2>Occupancy</h2>
          <input type='radio' id='single' name='occupancy' value='single' onChange={this.handleChange}/>
          <label htmlFor='single'>Single</label>
          <input type='radio' id='multiple' name='occupancy' value='multiple' onChange={this.handleChange}/>
          <label htmlFor='multiple'>Multiple</label>

          <h2>Soap Type</h2>
          <input type='radio' id='foam' name='soap' value='foam' onChange={this.handleChange}/>
          <label htmlFor='foam'>Foam</label>
          <input type='radio' id='gel' name='soap' value='gel' onChange={this.handleChange}/>
          <label htmlFor='gel'>Gel</label>

          <h2>Drying Method</h2>
          <input type='radio' id='air' name='drying' value='air' onChange={this.handleChange}/>
          <label htmlFor='air'>Air Dry</label>
          <input type='radio' id='towel' name='drying' value='towel' onChange={this.handleChange}/>
          <label htmlFor='towel'>Paper Towel</label>
          <input type='radio' id='airTowel' name='drying' value='both' onChange={this.handleChange}/>
          <label htmlFor='airTowel'>Both</label>

          <h2>Has Baby Changing Station</h2>
          <input type='radio' id='yesBaby' name='babyChanging' value='hasBaby' onChange={this.handleChange}/>
          <label htmlFor='yesBaby'>True</label>
          <input type='radio' id='noBaby' name='babyChanging' value='doesntHaveBaby' onChange={this.handleChange}/>
          <label htmlFor='noBaby'>False</label>

          <button type='submit'>Flush!</button>
        </form>
      </div>
    );
  }
}
export default AddToilet;
