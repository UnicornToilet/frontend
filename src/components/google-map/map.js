import React from 'react'
import {Map, GoogleApiWrapper, InfoWindow} from 'google-maps-react'

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.fetchToilets = this.fetchToilets.bind(this);
  }

  fetchToilets() {
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
          onReady={this.fetchToilets}
          google={this.props.google}
          initialCenter={codeFellows}
          style={style}
          zoom={14}
        />
      </div>
    )
  }
};

export default GoogleApiWrapper({
  apiKey: __GOOGLE_KEY__,
})(MapContainer);