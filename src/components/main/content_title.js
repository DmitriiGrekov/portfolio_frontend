import React, { Component } from 'react'

export default class ContentTitle extends Component {
    render() {
        return (
            <div className="content_title">
                <p>{this.props.title}</p>
            </div>
        )
    }
}
