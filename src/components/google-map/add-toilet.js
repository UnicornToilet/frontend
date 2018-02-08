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
    this.setState({name:value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit('showAddToilets');
    // this.props.addToilet(this.state);
    // this.setState(emptyState);
  }

  render(){
    return (
      <div>
        <form className='addToilet-form'>

          <input type="text" id='toiletLocation' name='locationName' />

          <h2>Toiet Paper Quality</h2>
          <input type='radio' id='tpQuality1' name='tpQuality' value='1'/>
          <label htmlFor='tpQuality1'> 1 </label>
          <input type='radio' id='tpQuality2' name='tpQuality' value='2'/>
          <label htmlFor='tpQuality2'> 2 </label>
          <input type='radio' id='tpQuality3' name='tpQuality' value='3'/>
          <label htmlFor='tpQuality3'> 3 </label>
          <input type='radio' id='tpQuality4' name='tpQuality' value='4'/>
          <label htmlFor='tpQuality4'> 4 </label>
          <input type='radio' id='tpQuality5' name='tpQuality' value='5'/>
          <label htmlFor='tpQuality5'> 5 </label>

          <h2>Occupancy</h2>
          <input type='radio' id='single' name='occupancy' value='single'/>
          <label htmlFor='single'>Single</label>
          <input type='radio' id='multiple' name='occupancy' value='multiple'/>
          <label htmlFor='multiple'>Multiple</label>

          <h2>Soap Type</h2>
          <input type='radio' id='foam' name='soap' value='foam'/>
          <label htmlFor='foam'>Foam</label>
          <input type='radio' id='gel' name='soap' value='gel'/>
          <label htmlFor='gel'>Gel</label>

          <h2>Drying Method</h2>
          <input type='radio' id='air' name='drying' value='air'/>
          <label htmlFor='air'>Air Dry</label>
          <input type='radio' id='towel' name='drying' value='towel'/>
          <label htmlFor='towel'>Paper Towel</label>
          <input type='radio' id='airTowel' name='drying' value='both'/>
          <label htmlFor='airTowel'>Both</label>

          <h2>Has Baby Changing Station</h2>
          <input type='radio' id='yesBaby' name='babyChanging' value='hasBaby'/>
          <label htmlFor='yesBaby'>True</label>
          <input type='radio' id='noBaby' name='babyChanging' value='doesntHaveBaby'/>
          <label htmlFor='noBaby'>False</label>

          <button type='submit' onSubmit={this.handleSubmit}>Flush!</button>
        </form>
      </div>
    );
  }
}
export default AddToilet;
