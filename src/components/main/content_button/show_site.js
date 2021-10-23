import React, { Component } from 'react'

export default class ShowSite extends Component {
    render() {
        return (

            <button><a href={this.props.url} target="_blank" rel="noreferrer">Посмотреть сайт</a></button>
        )
    }
}
