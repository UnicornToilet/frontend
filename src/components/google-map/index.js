import React from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends React.Component {
  render() {
    return(
      <Map google={this.props.googe} zoom={14}/>
    )
  }
};

export default GoogleApiWrapper({
  apiKey: __GOOGLE_KEY__,
})(MapContainer);