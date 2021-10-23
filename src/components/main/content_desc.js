import React, { Component } from 'react'

export default class ContentDesc extends Component {
    
    render() {
        return (
            <div className="content_desc">

                <pre>
                    {this.props.desc}
                </pre>

            </div>

        )
    }
}
