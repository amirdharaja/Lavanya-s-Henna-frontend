
import React from 'react';

import * as authActions from '../../store/actions/actions';
import { connect } from 'react-redux';

import Alert from '../../containers/Alert';

import logo from '../../resources/logo/logo.png';

import { Redirect } from 'react-router-dom';





export class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    login = (event) => {
        event.preventDefault();
        if (!this.state.credentials.username || !this.state.credentials.password) {
            this.setState({
                alertVisible: true,
                alertType: 'danger',
                alertTitle: 'Error',
                alertMessage: 'Username password cannot be empty',
            });
        }
        else {
            this.props.adminLogin(this.state.credentials.username, this.state.credentials.password);
        }

    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({
            credentials: cred
        });
    }

    render() {
        return (
            <main>

                {(localStorage.getItem('isAuthenticated'))
                    ? <Redirect to='/lavanyashenna/admin/dashboard'></Redirect>
                    : null
                }

                {
                    (this.state.alertVisible) ? (
                        <div id='alert-message'>
                            <Alert
                                id="001"
                                type={this.state.alertType}
                                title={this.state.alertTitle}
                                message={this.state.alertMessage}
                            >
                            </Alert>
                        </div>
                    ) : (<></>)
                }

                <div className="login">
                    <div className="login-container">
                        <div className="col-left">
                            <div className="login-text">
                                <p>LAVANYA'S HENNA</p>
                                <img src={logo} alt='logo' />
                                <p>A PERFECT MEHNDI STUDIO</p>
                            </div>
                        </div>
                        <div className="col-right">
                            <div className="login-form">
                                <h3>ADMIN LOGIN</h3>
                                <form>
                                    <p>
                                        <input
                                            type="email"
                                            name='username'
                                            value={this.state.credentials.username}
                                            onChange={this.inputChanged}
                                            placeholder="Admin Email ID"
                                            title="Admin can only Login"
                                            required />
                                    </p>
                                    <p>
                                        <input
                                            type='password'
                                            name='password'
                                            value={this.state.credentials.password}
                                            onChange={this.inputChanged}
                                            placeholder='Admin Password' required />
                                    </p>
                                    <p><button type='submit' onClick={this.login}>LOGIN</button></p>
                                </form>
                                <p><a href="/">Forget password?</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        adminLogin: (username, password) => dispatch(authActions.adminLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);