import React from 'react';
import {Form, Text, Radio, RadioGroup, Select, Checkbox} from 'react-form';

const dryingOptions = [
  {
    label: 'Paper Towel',
    value: 'towel',
  },
  {
    label: 'Air Dry',
    value: 'air',
  },
  {
    label: 'Both',
    value: 'both',
  },
];

class AddToilet extends React.Component{
  constructor(props){
    super(props);
    this.state ={};
  }
  render(){
    return (
      <div>
        <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
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

              <label htmlFor="babyChange" className="mr-2">Has Baby Changing Station</label>
              <Checkbox field="babyChange" id="babyChange" className="d-inline-block" />

              <label htmlFor="drying" className="d-block">Drying Method</label>
              <Select field="drying" id="drying" options={dryingOptions} />

              <button type="submit" className="mb-4 btn btn-primary">Flush</button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}
export default AddToilet;
