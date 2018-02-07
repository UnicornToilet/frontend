import React from 'react';
import {connect} from 'react-redux';

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
  }
  
  handleButtonClick(e, form){
    let {name} = e.target; 
    this.state[name] ? this.setState({[name]:false, showMap:true}) : this.setState({[name]:true, showMap:false});
  }

  render() {
    return (
      <React.Fragment>
        
        {renderIf(!this.state.showAddToilet,
          <button onClick={this.handleButtonClick} name='showFilter'> edit filters </button>
        )}
        
        {renderIf(!this.state.showFilter,
          <button onClick={this.handleButtonClick} name='showAddToilet'> add toilet </button>
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
          />
        )}
        
        
        {renderIf(this.state.showAddToilet, 
          <AddToilet />
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
    initMap: () => dispatch(toilets.getToilets()),
    filter: (preferences) => dispatch(toilets.filterToilets(preferences)),
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(MapContainer);
