import '../style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import * as toilets from './google-map/actions'

import Header from './header'
import Footer from './footer'
import Map from '../components/google-map/map.js'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <Header appTitle="Unicorn Toilet" />

                <Map 
                    initMap = {this.props.initMap}
                    toilets = {this.props.toilets}
                />

            </React.Fragment>
        )
    }
}


let mapStateToProps = (state) => ({
    toilets: state.toilets,
  })
  
  let mapDispatchToProps = (dispatch) => ({
    initMap: () => dispatch(toilets.getToilets()),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(App)