import React from 'react';

const emptyState = {
  locationName:'',
  overallQuality: 0,
  tpQuality: 0,
  soap: '',
  drying: '',
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
    this.props.handleSubmit('showAddToilet');
    this.setState(emptyState);
  }

  render(){
    console.log(this.state);
    return (
      <div>
        <h1></h1>
        <form className='form-inline' onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id='locationName' name='locationName' placeholder="Location Name" onChange={this.handleChange} value={this.state.locationName}/>
          </div>
          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name='overallQuality' onChange={this.handleChange}>
            <option selected>Overall Quality</option>
            <option id='overallQuality1' name='overallQuality' value='1' onChange={this.handleChange}>One</option>
            <option id='overallQuality2' name='overallQuality' value='2' onChange={this.handleChange}>Two</option>
            <option id='overallQuality3' name='overallQuality' value='3' onChange={this.handleChange}>Three</option>
            <option id='overallQuality4' name='overallQuality' value='4' onChange={this.handleChange}>Four</option>
            <option id='overallQuality5' name='overallQuality' value='5' onChange={this.handleChange}>Five</option>
          </select>
          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name='tpQuality' onChange={this.handleChange}>
            <option selected>Toilet Paper Quality</option>
            <option id='tpQuality1' name='tpQUality' value='1' onChange={this.handleChange}>One</option>
            <option id='tpQuality2' name='tpQUality' value='2' onChange={this.handleChange}>Two</option>
            <option id='tpQuality3' name='tpQUality' value='3' onChange={this.handleChange}>Three</option>
            <option id='tpQuality4' name='tpQUality' value='4' onChange={this.handleChange}>Four</option>
            <option id='tpQuality5' name='tpQUality' value='5' onChange={this.handleChange}>Five</option>
          </select>
          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name='soap' onChange={this.handleChange}>
            <option selected>Soap Type</option>
            <option id='gel' name='soap' value='gel' onChange={this.handleChange}>Gel</option>
            <option id='foam' name='soap' value='foam' onChange={this.handleChange}>Foam</option>
          </select>
          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name='drying' onChange={this.handleChange}>
            <option selected>Drying Method</option>
            <option id='paperTowel' name='drying' value='paper towel' onChange={this.handleChange}>Paper Towel</option>
            <option id='airDry' name='drying' value='air dry' onChange={this.handleChange}>Air</option>
          </select>

          <button type="submit" className="btn btn-primary my-1">Submit</button>
        </form>
        {/* <form className='addToilet-form' onSubmit={this.handleSubmit}>

          <h2> Toilet Location </h2>
          <input type="text" name='locationName' onChange={this.handleChange} value={this.state.locationName}/>

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

          <h2> Soap Type </h2>
          <input type='radio' id='gel' name='soap' value='gel' onChange={this.handleChange}/>
          <label htmlFor='gel'> gel </label>

          <input type='radio' id='foam' name='soap' value='foam' onChange={this.handleChange}/>
          <label htmlFor='foam'> foam </label>

          <br/>

          <h2> Drying Method </h2>
          <input type='radio' id='paperTowel' name='drying' value='paper towel' onChange={this.handleChange}/>
          <label htmlFor='paperTowel'> Paper Towel </label>

          <input type='radio' id='airDry' name='drying' value='air dry' onChange={this.handleChange}/>
          <label htmlFor='airDry'> Air Dry </label>

          <input type='radio' id='both' name='drying' value='both' onChange={this.handleChange}/>
          <label htmlFor='both'> Both </label>

          <br/>

          <button type='submit'> submit </button>
        </form> */}
      </div>
    );
  }
}
export default AddToilet;
