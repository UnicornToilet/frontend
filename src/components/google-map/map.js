import React from 'react'
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.loadMarkers = this.loadMarkers.bind(this);
  }

    loadMarkers() {
      return Object.keys(this.props.toilets).map((toilet,i) => (
        <Marker
          position={this.props.toilets[toilet].location}
          key={i}
        />
      ))
    }


  render() {

    const style = {
      width: '100%',
      height: '60%',
      margin: '5em 0'
    }

    const codeFellows = {
      lat: 47.6182477,
      lng: -122.35406
    }
    
    return(
      <div className='map-container'>
        <Map 
          onReady={this.props.initMap}
          google={this.props.google}
          initialCenter={codeFellows}
          style={style}
          zoom={14}
        >

        <Marker
          position={codeFellows}
        />

        {this.loadMarkers()}
        
      </Map>
      </div>
    )
  }
};

export default GoogleApiWrapper({
  apiKey: __GOOGLE_KEY__,
})(MapContainer);