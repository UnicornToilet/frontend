import React from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import GoogleMap from './map';
import FilterForm from './filter-form';
import AddToilet from './add-toilet';

import * as toilets from './actions';
import {renderIf} from '../../lib/__';

class MapContainer extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      showFilter: false,
      showMap: true,
      showAddToilet: false,
    }
    
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(form) {
    this.setState({[form]:false, showMap:true})
  }

  handleButtonClick(e){
    let {name} = e.target; 
    this.state[name] ? this.setState({[name]:false, showMap:true}) : this.setState({[name]:true, showMap:false});
  }

  render() {
    return (
      <React.Fragment>
        
        {renderIf(!this.state.showAddToilet,
          <button type="button" className="btn btn-outline-primary" onClick={this.handleButtonClick} name='showFilter'> Edit Filters </button>
        )}
        
        {renderIf(!this.state.showFilter,
          <button type="button" className="btn btn-outline-primary" onClick={this.handleButtonClick} name='showAddToilet'> Add Toilet </button>
        )}
      
        {renderIf(this.state.showMap, 
          <GoogleMap 
            toilets={this.props.toilets}
            actions={this.props.actions}
          />
        )}
        
        {renderIf(this.state.showFilter, 
          <FilterForm 
            actions={this.props.actions} 
            handleSubmit={this.handleSubmit}
          />
        )}
        
        
        {renderIf(this.state.showAddToilet, 
          <AddToilet 
            actions={this.props.actions} 
            handleSubmit={this.handleSubmit}
          />
        )}
        
      </React.Fragment>
    )
  }
}

let mapStateToProps = (state) => ({
  toilets: state.toilets,
})

let mapDispatchToProps = (dispatch) => ({
  actions: {
    getToilets: () => dispatch(toilets.getToilets()),
    filterToilets: (prefs) => dispatch(toilets.filterToilets(prefs)),
    addToilet: (data) => dispatch(toilets.addToilet(data)),
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(MapContainer);
