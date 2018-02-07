import React from 'react'
import {connect} from 'react-redux'
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
import FilterForm from './filter-form'
import * as toilets from './actions'
import {renderIf} from '../../lib/__';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilter: false,
      showMap: true,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    this.loadMarkers = this.loadMarkers.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
  }

    loadMarkers() {
      return Object.keys(this.props.toilets).map((toilet,i) => (
        <Marker
          key={i}
          onClick={this.handleMarkerClick}
          name={this.props.toilets[toilet].locationName}
          position={this.props.toilets[toilet].location}
        />
      ))
    }

    handleMapClick(props) {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    }

    handleMarkerClick(props, marker, e) {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }

    handleFormClick(e){
      this.state.showFilter ? this.setState({showFilter:false, showMap:true}) : this.setState({showFilter:true, showMap:false});
    }

  render() {
    const style = {
      width: '100%',
      height: '60%',
      margin: '5em 0'
    }

    return(
      <div className='map-container'>

        <button onClick={this.handleFormClick}> edit filters </button>
        
        {renderIf(this.state.showMap, 
        <Map 
          onClick={this.handleMapClick}
          onReady={this.props.initMap}
          google={this.props.google}
          initialCenter={{lat: 47.6182477, lng: -122.35406}}
          style={style}
          zoom={15}
        >

        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <p> {this.state.selectedPlace.name} </p>
        </InfoWindow>

        {this.loadMarkers()}

        </Map>
        )}

        <br/>
        
        {renderIf(this.state.showFilter, <FilterForm />)}
        

      </div>
    )
  }
};


let mapStateToProps = (state) => ({
  toilets: state.toilets,
})

let mapDispatchToProps = (dispatch) => ({
  initMap: () => dispatch(toilets.getToilets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: __GOOGLE_KEY__,
})(MapContainer));