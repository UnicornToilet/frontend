import '../style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Map from '../components/google-map'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <Header appTitle="React App" />

                <Map />

                <Footer>
                    <p>&copy;2017 401n4</p>
                </Footer>

            </React.Fragment>
        )
    }
}

export default App;