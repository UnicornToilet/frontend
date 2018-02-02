import React from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends React.Component {
  render() {
    console.log(__API_URL__);
    return(
      <h1> map shit </h1>
    )
  }
};

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_KEY
})(MapContainer);