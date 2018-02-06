import '../style/main.scss';

import React from 'react';
<<<<<<< HEAD
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import * as toilets from './google-map/actions';

import Header from './header';
import Footer from './footer';
import Map from '../components/google-map/map.js';
import AddToilet from '../components/google-map/add-toilet.js';
=======
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './header'
import Footer from './footer'
import Map from '../components/google-map/map.js'
import FilterForm from '../components/google-map/filter-form.js'
>>>>>>> dev

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <Header appTitle="Unicorn Toilet" />

<<<<<<< HEAD
                <Map
                    initMap = {this.props.initMap}
                    toilets = {this.props.toilets}
                />
=======
                <main>
                    <Route exact path='/' component={Map} />
                    <Route exact path='/filter' component={FilterForm} />>
                </main>
>>>>>>> dev

            </React.Fragment>

            <AddToilet />
        )
    }
}

<<<<<<< HEAD

let mapStateToProps = (state) => ({
    toilets: state.toilets,
  })

  let mapDispatchToProps = (dispatch) => ({
    initMap: () => dispatch(toilets.getToilets()),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(App)
=======
export default App;
>>>>>>> dev
