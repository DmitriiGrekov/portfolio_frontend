import React, { Component } from 'react'
import ContactForm from './contact_form'
import ContactMessage from './contact_message'

export default class Contact extends Component {
    render() {
        return (
            <div>

                <ContactMessage />
                <ContactForm />

                <p className="mb-2">Или написать письмо на почту: <b>grekovdima7@gmail.com</b></p>
                
            </div>
        )
    }
}
