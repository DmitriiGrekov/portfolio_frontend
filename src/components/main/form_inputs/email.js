import React, { Component } from 'react'

export default class Email extends Component {

    emailHandleChange = (e) => {
        e.preventDefault()
        this.props.emailHandelChange(e.target.value)
    }
    render() {
        return (
            <div className="col">
                <input type="text" className="form-control" placeholder="Почта" onChange={this.emailHandleChange} />
            </div>
        )
    }
}
