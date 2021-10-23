import React, { Component } from 'react'

export default class TextArea extends Component {
    messageHandelChange = (e) => {
        e.preventDefault()
        this.props.messageHandelChange(e.target.value)
    }
    render() {
        return (
            <div className="form-group mb-2">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Введите сообщение' onChange={this.messageHandelChange}></textarea>
            </div>
        )
    }
}
