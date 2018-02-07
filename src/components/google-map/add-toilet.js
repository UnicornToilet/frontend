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
    this.handlChange = this.handlChange.bind(this);
  }

  handleChange(e){
    let {name, value} = e.target;
    console.log(e.target);
    this.setState({name:value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addToilet(this.state);
    this.setState(emptyState);
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



          <button type='submit' onSubmit={this.handleSubmit}>Flush!</button>
        </form>
      </div>
    );
  }
}
export default AddToilet;
