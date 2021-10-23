import React, { Component } from 'react'
import NavSite from './nav_site'

export default class Nav extends Component {

    reset_site_info = (e) => {
        e.preventDefault()
        this.props.reset_site_info()
    }

    show_contacts = (e) => {
        e.preventDefault()
        this.props.show_contacts()
    }


   

    render() {
        return (
            <nav className='col-lg-2'>
                <ul>
                    <li><span onClick={this.reset_site_info} className={this.props.id == null ? 'active' : ''}>Главная</span></li>
                    {Object.keys(this.props.sites).map((key) => {
                        return (
                            <NavSite
                                key={this.props.sites[key].id}
                                id={this.props.id}
                                show_current_site={this.props.show_current_site}
                                site_info={this.props.sites[key]}
                            />
                        );
                    })}
                    <li><span >Био</span></li>
                    <li><span  className={this.props.id === 'contacts' ? 'active' : ''} onClick={this.show_contacts}>Контакты</span></li>


                </ul>
            </nav>
        )
    }
}
