import React from 'react'
import {connect} from 'react-redux'
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
import FilterForm from './filter-form'
import * as toilets from './actions'
import {renderIf} from '../../lib/__';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    this.initialize = this.initialize.bind(this);
    this.loadMarkers = this.loadMarkers.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  
    initialize(){
      this.props.actions.getToilets(null);
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

  handleMapClick(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  handleMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  render() {
    const style = {
      width: '100%',
      height: '60%',
      margin: '5em 0',
    };

    return(
      <Map 
        onClick={this.handleMapClick}
        onReady={this.initialize}
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
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GOOGLE_KEY__,
})(GoogleMap);

