import React from 'react';
import {connect} from 'react-redux';

import GoogleMap from './map';
import FilterForm from './filter-form';
import * as toilets from './actions';
import {renderIf} from '../../lib/__';

class MapContainer extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      showFilter: false,
      showMap: true,
    }
    
    this.handleFormClick = this.handleFormClick.bind(this);
  }
  
  handleFormClick(e){
    this.state.showFilter ? this.setState({showFilter:false, showMap:true}) : this.setState({showFilter:true, showMap:false});
  }

  render() {
    return (
      <React.Fragment>
        
        <button onClick={this.handleFormClick}> edit filters </button>
      
        {renderIf(this.state.showMap, 
          <GoogleMap 
            toilets={this.props.toilets}
            actions={this.props.actions}
        />)}
        
        {renderIf(this.state.showFilter, 
          <FilterForm 
          actions={this.props.actions} 
        />)}
        
      </React.Fragment>
    )
  }
}

let mapStateToProps = (state) => ({
  toilets: state.toilets,
})

let mapDispatchToProps = (dispatch) => ({
  actions: {
    initMap: () => dispatch(toilets.getToilets()),
    filter: (preferences) => dispatch(toilets.filterToilets(preferences)),
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(MapContainer);
