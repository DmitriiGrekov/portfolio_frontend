import React, { Component } from 'react'

export default class NavSite extends Component {
    

    click_to_site = (e) => {
        e.preventDefault();
        this.props.show_current_site(this.props.site_info)
    }

    render() {
        return (
            
            <li>
                <span className={this.props.id === this.props.site_info.id  ? 'active' : ''} onClick={this.click_to_site}>{this.props.site_info.name}</span>
            </li>
        )
    }
}
