import React, { Component } from 'react'

export default class ShowRep extends Component {
    render() {
        return (

            <button><a href={this.props.url} target="_blank" rel="noreferrer">Посмотреть репозиторий</a></button>
        )
    }
}
