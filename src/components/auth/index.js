import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {renderIf} from '../../lib/__';

import AuthForm from './form';

class Auth extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.authLogin();
  }

  render() {

    let form = this.props.allowLogin
      ? <AuthForm handleCreate={this.props.authCreate} handleLogin={this.props.authLogin} />
      : null;

    return (

      <React.Fragment>
        {
          renderIf (
            this.props.auth,
            this.props.children,
            form
          )
        }
      </React.Fragment>

    );

  }

}



const mapStateToProps = (state) => ({
  auth:state.auth,
});

const mapDispatchToProps = (dispatch, getState) => ({
  authLogin: user => dispatch(actions.authLogin(user)),
  authCreate: user => dispatch(actions.authCreateAccount(user)),
  authLogout: () => dispatch(actions.authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
