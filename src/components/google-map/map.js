import React from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    this.loadMarkers = this.loadMarkers.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
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
  }

  render() {
    const style = {
      width: '100%',
      height: '60%',
      margin: '5em 0',
    };

    return(
      <div className='map-container'>
        <Map
          onClick={this.handleMapClick}
          onReady={this.props.initMap}
          google={this.props.google}
          initialCenter={{lat: 47.6182477, lng: -122.35406}}
          style={style}
          zoom={14}
        >

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <p> {this.state.selectedPlace.name} </p>
          </InfoWindow>

          {this.loadMarkers()}

        </Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: __GOOGLE_KEY__,s
})(MapContainer);
