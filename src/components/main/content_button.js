import React, { Component } from 'react'
import ShowSite from './content_button/show_site'
import ShowRep from './content_button/show_rep'

export default class ContentButton extends Component {
    render() {
        if (this.props.component_but_rep.length > 1) {
            return (
                <div className="content_button">
                    <ShowSite url={this.props.component_but_site} />
                    <ShowRep url={this.props.component_but_rep}/>
                </div>
            )
        }
        else{
            return (
                <></>
            )
        }

    }
}
