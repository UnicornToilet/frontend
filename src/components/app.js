import '../style/main.scss';

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './header'
import Footer from './footer'
import Map from '../components/google-map/index.js'
import FilterForm from '../components/google-map/filter-form.js'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <Header appTitle="Unicorn Toilet" />
                <Auth>
                  <AddToilet />
                </Auth>


                <main>
                    <Route exact path='/' component={Map} />
                </main>

            </React.Fragment>
        )
    }
}

export default App;
