import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/__';
import './style.scss';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignup:false,
      username: '',
      password: '',
      email: '',
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
  }

  showLogin(e){
    e.preventDefault();
    let newState = !this.state.showLogin;
    this.setState({showLogin: newState});
  }

  showSignup(e){
    e.preventDefault();
    let newState = !this.state.showSignup;
    this.setState({showSignup: newState});
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {

    e.preventDefault();

    let handler = e.target.dataset.handler === 'signup' ? this.props.handleCreate : this.props.handleLogin;
    
    handler(this.state)
      .then()
      .catch(console.error);
  }

  render() {
    let username =
                <label htmlFor="username">
                  <span>username:</span>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    required="true"
                    onChange={this.handleChange}
                  />
                </label>;

    let password =
                <label htmlFor="password">
                  <span>password:</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    required="true"
                    onChange={this.handleChange}
                  />
                </label>;

    return (
      <React.Fragment>

        <button onClick={this.showLogin} type="submit" className="btn btn-primary my-1">Login</button>
        <button onClick={this.showSignup} type="submit" className="btn btn-primary my-1">Signup</button>

        <div className="loginFormContainer">
          {renderIf(this.state.showLogin,
            <form onSubmit={this.handleSubmit} data-handler="login" className="auth-form">
              <h2>Login</h2>

              {username}
              {password}

              <button type="submit" className="btn btn-primary my-1">Login</button>

            </form>
          )}

          {renderIf(this.state.showSignup,
            <form onSubmit={this.handleSubmit} data-handler="signup" className="auth-form">
              <h2 id='josh'>Signup</h2>

              <label htmlFor="email">
                <span>email:</span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  required="true"
                  onChange={this.handleChange}
                />
              </label>

              {username}

              {password}

              <button type="submit" className="btn btn-primary my-1">Create Account</button>
            </form>
          )}

        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth:state.auth,
});
export default connect(mapStateToProps)(AuthForm);