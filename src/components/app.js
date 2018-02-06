import '../style/main.scss';

import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './header'
import Footer from './footer'
import Map from '../components/google-map/map.js'
import FilterForm from '../components/google-map/filter-form.js'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <Header appTitle="Unicorn Toilet" />

                <main>
                    <Route exact path='/' component={Map} />
                    <Route exact path='/filter' component={FilterForm} />>
                </main>

            </React.Fragment>
        )
    }
}

export default App;