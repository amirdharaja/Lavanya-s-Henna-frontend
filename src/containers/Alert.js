import React, { Component } from 'react';


class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = { isDismissed: false }
        this.dismissAlert = this.dismissAlert.bind(this);
    }

    dismissAlert() {
        this.setState({
            isDismissed: true
        });
    }

    render() {
        const { id, type, title, message } = this.props;

        return this.state.isDismissed ? null : (
            <div className={`rvt-alert rvt-alert--${type ? type : 'info'}`}
                role="alertdialog"
                aria-labelledby={id}>
                <h1 className="rvt-alert__title" id={id}>{title}</h1>
                <p className="rvt-alert__message">{message}</p>
                <button className="rvt-alert__dismiss" onClick={this.dismissAlert}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" />
                    </svg>
                </button>
            </div>
        );
    }
}

export default Alert;