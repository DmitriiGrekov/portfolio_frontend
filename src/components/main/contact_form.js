import React, { Component } from 'react'
import Text from './form_inputs/text'
import Email from './form_inputs/email'
import TextArea from './form_inputs/text_area'
import validator from 'validator'

export default class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input_value: '',
            email_value: '',
            message_value: '',
            input_error: '',
            email_error: '',
            message_error: '',
            response_status: '',
        }
    }


    inputHandelChange = (value) => {
        this.setState({
            input_value: value,
        })
    }

    emailHandelChange = (value) => {
        this.setState({
            email_value: value,
        })
    }

    messageHandelChange = (value) => {
        this.setState({
            message_value: value,
        })
    }

    handelOnSubmit = (e) => {
        e.preventDefault()
        if (this.state.input_value.length < 1) {
            this.setState({
                input_error: "Вы не ввели имя"

            })
            return

        }
        else {
            this.setState({
                input_error: '',
            })
        }

        if (this.state.email_value.length < 1) {
            this.setState({
                email_error: "Вы не ввели почту"
            })
            return
        }
        else if (!validator.isEmail(this.state.email_value)) {
            this.setState({
                email_error: 'Введите валидную почту'
            })
            return
        }
        else {
            this.setState({
                email_error: ""
            })
        }
        if (this.state.message_value.length < 1) {
            this.setState({
                message_error: "Вы не ввели сообщение"
            })
            return
        }
        else {
            this.setState({
                message_error: ""
            })
        }
        const data = {
            name: this.state.input_value,
            email: this.state.email_value,
            text: this.state.message_value
        }

        const url = "https://dmitriigrekov.pythonanywhere.com/api/contact/send_mail/"

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ response_status: data.status }));

    }




    render() {
        return (
            <>
                {this.state.input_error.length > 1 && (
                    <div className="alert alert-secondary" role="alert">

                        {this.state.input_error.length > 1 ? this.state.input_error : ''}<br />
                    </div>
                )}

                {this.state.email_error.length > 1 && (
                    <div className="alert alert-secondary" role="alert">
                        {this.state.email_error.length > 1 ? this.state.email_error : ''}<br />
                    </div>
                )}

                {this.state.message_error.length > 1 && (
                    <div className="alert alert-secondary" role="alert">
                        {this.state.message_error.length > 1 ? this.state.message_error : ''}<br />
                    </div>
                )}
                {this.state.response_status === 'ok' && (
                    <div className="alert alert-secondary" role="alert">
                        Ваше сообщение успешно отправлено, спасибо.
                    </div>
                )}

                <form onSubmit={this.handelOnSubmit}>
                    <div className="form-row d-flex mb-2 mt-2 p-0">
                        <Text inputHandelChange={this.inputHandelChange} />
                        <Email emailHandelChange={this.emailHandelChange} />
                    </div>

                    <TextArea messageHandelChange={this.messageHandelChange} />
                    <input className="contact_button" type='submit' value="Отправить" />
                </form>
            </>
        )
    }
}
