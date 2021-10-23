import React, { Component } from 'react'

export default class ContentHeader extends Component {
    render() {
        return (

            <div className="content_header">
                <p>{this.props.header}</p>
            </div>
        )
    }
}
