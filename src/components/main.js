import React, { Component } from 'react'
import Nav from './main/nav'
import ContentTitle from './main/content_title'
import ContentHeader from './main/content_header'
import ContentDesc from './main/content_desc'
import ContentImage from './main/content_image'
import ContentButton from './main/content_button'
import logo from '../img/kak-delat-portfolio-dlja-studenta-3.jpg';
import Footer from './main/footer'
import Contact from './main/contact'
import axios from 'axios';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_site_id: null,
            sites: [],
            component_title: '',
            component_image: null,
            component_header: '',
            component_desc: '',
            component_but_site: '',
            component_but_rep: '',
        }
    }


    set_session_data = (data) => {
        sessionStorage.current_site = JSON.stringify({
            title: data.name,
            desc: data.desc,
            header: data.name,
            but_site: data.link_to_site,
            but_rep: data.link_to_rep,
            image: data.image,
            current_site_id: data.id
        });
    }

    set_state_site = (data) => {
        this.setState({
            component_title: data.title,
            component_image: data.image,
            component_header: data.header,
            component_desc: data.desc,
            component_but_site: data.but_site,
            component_but_rep: data.but_rep,
            current_site_id: data.id


        })

    }



    componentDidMount() {


        if (sessionStorage.length < 1) {

            // if (this.state.current_site == null) {
            this.set_state_site({
                title: "Немного о сайте",
                image: logo,
                header: "Немного о сайте",
                desc: 'На этом сайте показаны все проекты, которые мне удалось сделать за последнее время',
                but_site: '',
                but_rep: '',
                id: null
            })
        }
        else {

            let current_site = JSON.parse(sessionStorage.current_site)
            this.set_state_site({
                title: current_site.title,
                image: "https://dmitriigrekov.pythonanywhere.com" + current_site.image,
                header: current_site.header,
                desc: current_site.desc,
                but_site: current_site.but_site,
                but_rep: current_site.but_rep,
                id: current_site.current_site_id


            })

        }
        axios({
            method: 'get',
            url: 'https://dmitriigrekov.pythonanywhere.com/api/list/',
        }).then((response) => {
            response.data.map((res) => {
                const sites = { ...this.state.sites }
                sites[`site${Date.now()}`] = res
                this.setState({ sites })
                return true;
            })

        });
    }





    show_current_site = (data) => {
        this.set_session_data(data)
        let current_site = JSON.parse(sessionStorage.current_site)

        this.set_state_site({
            title: current_site.title,
            image: "https://dmitriigrekov.pythonanywhere.com" + current_site.image,
            header: current_site.header,
            desc: current_site.desc,
            but_site: current_site.but_site,
            but_rep: current_site.but_rep,
            id: current_site.current_site_id

        })
    }

    reset_site_info = () => {
        sessionStorage.clear()
        this.setState({
            component_title: "Немного о сайте",
            component_image: logo,
            component_header: "Немного о сайте",
            component_desc: "На этом сайте показаны все проекты, которые мне удалось сделать за последнее время",
            component_but_site: '',
            component_but_rep: '',
            current_site_id: null,

        })

    }

    show_contacts = () => {
        this.setState({
            current_site_id: 'contacts'

        })
        sessionStorage.current_site = JSON.stringify({
            current_site_id: 'contacts'
        })

    }

    render() {

        return (
            <div className="main">
                <div className="container">
                    <div className="row">

                        <Nav sites={this.state.sites}
                            show_current_site={this.show_current_site}
                            reset_site_info={this.reset_site_info}
                            id={this.state.current_site_id}
                            show_contacts={this.show_contacts} />


                        <div className="content col-lg-8">
                            {this.state.current_site_id === 'contacts' ?
                                (
                                    <Contact />                   
                                ) : (
                                    <>
                                        <ContentTitle title={this.state.component_title} />

                                        <ContentImage image={this.state.component_image} />

                                        <ContentHeader header={this.state.component_header} />

                                        <ContentDesc desc={this.state.component_desc} />

                                        <ContentButton component_but_rep={this.state.component_but_rep}
                                            component_but_site={this.state.component_but_site} />
                                    </>
                                )}



                            <Footer />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
