import React from 'react';
import {Form, Text, Radio, RadioGroup} from 'react-form';

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
    let {field, value} = e.target;
    console.log(e.target);
    this.setState({field:value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addToilet(this.state);
    this.setState(emptyState);
  }

  render(){
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form2">
              <label htmlFor="locationName">Location Name</label>
              <Text field="locationName" id="locationName" />

              <RadioGroup field="occupancy">
                { group => (
                  <div>
                    <p>Occupany</p>
                    <label htmlFor="single" className="mr-2">Single</label>
                    <Radio group={group} value="single" id="single" className="mr-3 d-inline-block" />

                    <label htmlFor="multiple" className="mr-2">Multiple</label>
                    <Radio group={group} value="multiple" id="multiple" className="d-inline-block" />
                  </div>
                )}
              </RadioGroup>

              <RadioGroup field="soap">
                { group => (
                  <div>
                    <p>Soap Type</p>
                    <label htmlFor="foam" className="mr-2">Foam</label>
                    <Radio group={group} value="foam" id="foam" className="mr-3 d-inline-block" />

                    <label htmlFor="gel" className="mr-2">Gel</label>
                    <Radio group={group} value="gel" id="gel" className="d-inline-block" />
                  </div>
                )}
              </RadioGroup>

              <RadioGroup field="tpQuality">
                { group => (
                  <div>
                    <p>Toilet Paper Quality</p>
                    <label htmlFor="one" className="mr-2">1</label>
                    <Radio group={group} value="one" id="one" className="mr-3 d-inline-block" />

                    <label htmlFor="two" className="mr-2">2</label>
                    <Radio group={group} value="two" id="two" className="d-inline-block" />

                    <label htmlFor="three" className="mr-2">3</label>
                    <Radio group={group} value="three" id="three" className="d-inline-block" />

                    <label htmlFor="four" className="mr-2">4</label>
                    <Radio group={group} value="four" id="four" className="d-inline-block" />

                    <label htmlFor="five" className="mr-2">5</label>
                    <Radio group={group} value="five" id="five" className="d-inline-block" />
                  </div>
                )}
              </RadioGroup>

              <RadioGroup field="drying">
                { group => (
                  <div>
                    <p>Drying Method</p>
                    <label htmlFor="towel" className="mr-2">Paper Towel</label>
                    <Radio group={group} value="towel" id="towel" className="mr-3 d-inline-block" />

                    <label htmlFor="air" className="mr-2">Air Dry</label>
                    <Radio group={group} value="air" id="air" className="d-inline-block" />

                    <label htmlFor="airTowel" className="mr-2">Both</label>
                    <Radio group={group} value="airTowel" id="airTowel" className="d-inline-block" />
                  </div>
                )}
              </RadioGroup>

              <RadioGroup field="babyChanging">
                { group => (
                  <div>
                    <p>Has Baby Changing Station</p>
                    <label htmlFor="yesBaby" className="mr-2">Yes</label>
                    <Radio group={group} value="yesBaby" id="yesBaby" className="mr-3 d-inline-block" />

                    <label htmlFor="noBaby" className="mr-2">No</label>
                    <Radio group={group} value="noBaby" id="noBaby" className="d-inline-block" />
                  </div>
                )}
              </RadioGroup>


              <button type="submit" className="mb-4 btn btn-primary">Flush</button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}
export default AddToilet;
