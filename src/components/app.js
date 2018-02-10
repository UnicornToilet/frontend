// import '../style/main.scss';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './header';
import Navbar from './navbar';
import Footer from './footer';
import Map from '../components/google-map/index.js';
import FilterForm from '../components/google-map/filter-form.js';
import Auth from '../components/auth/index.js';
import Profile from './profile';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('app', this.props);
    return (
      <React.Fragment>

        {/* <Header appTitle="Unicorn Toilet" /> */}

        <Auth allowLogin='true'>
          <Route exact path='/profile' component={Profile} />
        </Auth>

        {/* <Auth>
          <button><a href="/profile">Profile</a></button>
        </Auth> */}

        <main>
          <Route exact path='/' component={Map} />
        </main>

      </React.Fragment>
    );
  }
}

export default App;
