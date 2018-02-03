import '../style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom'

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

                <Map />

            </React.Fragment>
        )
    }
}

export default App;