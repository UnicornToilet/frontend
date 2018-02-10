import React from 'react';
import {connect} from 'react-redux';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import FilterForm from './filter-form';
import * as toilets from './actions';
import {renderIf} from '../../lib/__';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      activeToilet:{},
    };

    this.initialize = this.initialize.bind(this);
    this.loadMarkers = this.loadMarkers.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  componentDidMount(){
    this.initialize();
  }

  componentWillReceiveProps(props){
    this.loadMarkers();
  }

  initialize(){
    this.props.actions.getToilets();
  }

  loadMarkers() {
    return Object.keys(this.props.toilets).map((toilet,i) => (
      <Marker
        key={i}
        onClick={this.handleMarkerClick}
        name={this.props.toilets[toilet].locationName}
        position={this.props.toilets[toilet].location}
      />
    ));
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

    let {toilets} = this.props;
    for(let toilet in toilets){
      if(toilets[toilet].locationName === this.state.selectedPlace.name) {
        this.setState({
          activeToilet: toilets[toilet],
        });
      }
    }
    console.log(this.state.activeToilet)
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
        // onReady={this.initialize}
        google={this.props.google}
        initialCenter={{lat: 47.6182477, lng: -122.35406}}
        style={style}
        zoom={16}
      >

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h3> {this.state.activeToilet.locationName} </h3>
            <p> {'Overall Quality: ' + this.state.activeToilet.overallQuality}</p>
            <p> {'Toilet Paper Quality: ' + this.state.activeToilet.tpQuality}</p>
            <p> {'Soap Type: ' + this.state.activeToilet.soap}</p>
            <p> {'Hand Drying Method: ' + this.state.activeToilet.drying}</p>
          </div>
        </InfoWindow>

        {this.loadMarkers()}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: __GOOGLE_KEY__,
})(GoogleMap);
