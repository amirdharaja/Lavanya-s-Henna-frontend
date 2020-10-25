import React from 'react';

import axios from 'axios';

import { BASE_URL } from '../store/actions/ActionTypes';

import Alert from '../containers/Alert';

class ContactPopUp extends React.Component {

    state = {
        userContactRequest: {
            full_name: '',
            email: '',
            phone: '',
            details: ''
        },
        errors: {
            full_name: '',
            email: '',
            phone: '',
            details: ''
        },
        alertVisible: false
    }
    openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

    inputChanged = event => {
        const data = this.state.userContactRequest;
        data[event.target.name] = event.target.value;
        this.setState({
            userContactRequest: data,
            errors: {},
            alertVisible: false
        });
    }

    formValidation = () => {
        let formIsValid = true;
        let errors = {};
        let fields = this.state.userContactRequest;

        if (!fields["full_name"] || fields["full_name"] === '') {
            errors["full_name"] = "formError";
            formIsValid = false
        }
        if (!fields["phone"] || fields["phone"] === '') {
            errors["phone"] = "formError";
            formIsValid = false
        }
        if (!fields["email"] || fields["email"] === '') {
            errors["email"] = "formError";
            formIsValid = false
        }
        if (!fields["details"] || fields["details"] === '') {
            errors["details"] = "formError";
            formIsValid = false
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    sendRequest = (event) => {
        let is_valid = this.formValidation()
        event.preventDefault();
        let data = {
            name: this.state.userContactRequest.full_name,
            email: this.state.userContactRequest.email,
            phone: this.state.userContactRequest.phone,
            details: this.state.userContactRequest.details,
        }
        if (is_valid) {
            axios.post(BASE_URL + '/contact/', { data: data })
                .then(response => {
                    if (response.status === 201) {
                        this.setState({
                            alertVisible: true,
                            alertTitle: 'Success',
                            alertType: 'success',
                            alertMessage: 'Thank you for reaching me. We will get back to you with in 12 hours',
                            userContactRequest: {
                                full_name: '',
                                email: '',
                                phone: '',
                                details: ''
                            }

                        })
                    }
                })
                .catch(error => {
                    this.setState({ alertVisible: true, alertTitle: 'Sorry', alertType: 'danger', alertMessage: 'Unable to complete the process, Please try again' })
                })
        }
        else {
            this.setState({
                isLoading: false,
                alertTitle: 'Invalid inputs',
                alertMessage: 'Request Form is not valid, Please fill all the required fields',
                alertType: 'danger',
                alertVisible: true,
            })
        }
    }

    render() {
        return (
            <main id='contact-popup'>
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
                    ) : null
                }
                <a href='#0' className="open-button" onClick={this.openForm}>Contact Me</a>
                <div className="chat-popup" id="myForm">
                    <div className="form-container">
                        <h4>QUICK CONTACT</h4>
                        <input
                            type="text"
                            name="full_name"
                            className={this.state.errors.full_name}
                            onChange={this.inputChanged}
                            value={this.state.userContactRequest.full_name}
                            maxLength='128'
                            placeholder="Full Name" required />
                        <input
                            type="email"
                            name="email"
                            className={this.state.errors.email}
                            onChange={this.inputChanged}
                            value={this.state.userContactRequest.email}
                            placeholder="Email ID" required />
                        <input
                            type="number"
                            name="phone"
                            className={this.state.errors.phone}
                            onChange={this.inputChanged}
                            value={this.state.userContactRequest.phone}
                            placeholder="Phone Number" required />
                        <textarea
                            name="details"
                            className={this.state.errors.details}
                            onChange={this.inputChanged}
                            value={this.state.userContactRequest.details}
                            maxLength='255'
                            placeholder="Leave a message" required />

                        <button type="submit" className="btn" onClick={this.sendRequest}>Send</button>
                        <button type="button" className="btn cancel" onClick={this.closeForm}>Close</button>
                    </div>
                </div>
            </main>
        )
    }
}


export default ContactPopUp;