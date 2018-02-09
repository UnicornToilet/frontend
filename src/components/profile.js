import React from 'react';

import Auth from './auth';

class Profile extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Auth allowLogin="true">
          <h1>Welcome</h1>
        </Auth>
      </React.Fragment>
    );
  }
}
export default Profile;
