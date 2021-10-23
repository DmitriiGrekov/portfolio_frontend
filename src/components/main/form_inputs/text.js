import React, { Component } from 'react'

export default class Text extends Component {

    inputHandelChange = (e) =>{
        e.preventDefault()
        this.props.inputHandelChange(e.target.value)
    }
    render() {
        return (
            <div className="col">
                <input type="text" className="form-control" placeholder="Имя" onChange={this.inputHandelChange}/>
            </div>
                )
    }
}
